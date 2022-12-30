import { inject, injectable } from "inversify";
import { Game } from "../domain/entities/game.domain";
import { BoardRepository } from "../domain/repository/board.repository";

import { FoodRepository } from "../domain/repository/food.repository";
import { GameRepository } from "../domain/repository/game.repository";
import { PlayerRepository } from "../domain/repository/player.repository";
import { SnakeRepository } from "../domain/repository/snake.repository";

import {
	FOOD,
	GAME,
	PLAYER,
	SNAKE,
	BOARD,
} from "../infrastructure/inversify/types";
import GenerateRandomNumber from "./utils/generateRandomNumber";
import { SnakeService } from "./snake.services";
import { SNAKESERVICE } from "../infrastructure/inversify/types";
import { Food } from "../domain/entities/food.domain";
import { Snake } from "../domain/entities/snake.domain";
import { Player } from "../domain/entities/player.domain";

const generateNumber = new GenerateRandomNumber().randomNumber;

@injectable()
export class GameService {
	private gameRepository: GameRepository;
	private foodRepository: FoodRepository;
	private playerRepository: PlayerRepository;
	private snakeRepository: SnakeRepository;
	private boardRepository: BoardRepository;
	private snakeService: SnakeService;

	constructor(
		@inject(GAME) gameRepository: GameRepository,
		@inject(FOOD) foodRepository: FoodRepository,
		@inject(PLAYER) playerRepository: PlayerRepository,
		@inject(SNAKE) snakeRepository: SnakeRepository,
		@inject(BOARD) boardRepository: BoardRepository,
		@inject(SNAKESERVICE) snakeService: SnakeService
	) {
		this.gameRepository = gameRepository;
		this.foodRepository = foodRepository;
		this.playerRepository = playerRepository;
		this.snakeRepository = snakeRepository;
		this.boardRepository = boardRepository;
	}

	async createGame(game: Game) {
		return await this.gameRepository.createGame(game);
	}

	async getGameById(gameId: number) {
		return await this.gameRepository.getGameById(gameId);
	}

	async updateGame(game: Game) {
		return await this.gameRepository.updateGame(game);
	}

	async deleteGame(gameId: number) {
		return await this.gameRepository.deleteGame(gameId);
	}

	async restartGame(game: Game) {
		const food = await this.foodRepository.getFoodById(game.gameId);
		food.positionX = generateNumber(4);
		food.positionY = generateNumber(3);
		await this.foodRepository.updateFood(food);

		const player = await this.playerRepository.getPlayerById(game.playerId);
		await this.playerRepository.updatePlayer(player);

		const restartSnake = await this.snakeRepository.getSnakeById(game.snakeId);
		restartSnake.snakeLength = 1;
		restartSnake.snakePositionX = generateNumber(2);
		restartSnake.snakePositionY = generateNumber(5);
		await this.snakeRepository.updateSnake(restartSnake);

		game.gameStatus = "Ready to start";
		return await this.gameRepository.updateGame(game);
	}

	async snakeEatFood(gameId: number) {
		const game: Game = await this.gameRepository.getGameById(gameId);
		const food: Food = await this.foodRepository.getFoodById(game.foodId);
		const snake: Snake = await this.snakeRepository.getSnakeById(game.snakeId);
		const player: Player = await this.playerRepository.getPlayerById(
			game.playerId
		);

		const sameX = snake.snakePositionX === food.positionX;
		const sameY = snake.snakePositionY === food.positionY;

		if (sameX && sameY) {
			await this.generateNewFood(gameId);

			snake.snakeLength = snake.snakeLength + 1;
			snake.snakePositionX = generateNumber(3);
			snake.snakePositionY = generateNumber(3);
			await this.snakeRepository.updateSnake(snake);

			player.score = player.score + 1;
			await this.playerRepository.updatePlayer(player);

			food.positionX = generateNumber(1);
			food.positionY = generateNumber(2)
			await this.foodRepository.updateFood(food);	

			await this.gameRepository.updateGame(game)

			return true;
		}
		return false;
	}

	async generateNewFood(idFood: number) {
		const food = await this.foodRepository.getFoodById(idFood);
		food.positionX = generateNumber(3);
		food.positionY = generateNumber(2);
		return await this.foodRepository.updateFood(food);
	}

	async changeGameStatus(gameId: number, status: string) {
		const game = await this.gameRepository.getGameById(gameId);
		game.gameStatus = status;
		await this.gameRepository.updateGame(game);
	}
}
