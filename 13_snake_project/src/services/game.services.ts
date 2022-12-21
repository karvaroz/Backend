import { inject, injectable } from "inversify";
import { Game } from "../domain/entities/game.domain";
import { BoardRepository } from "../domain/repository/board.repository";
import { FoodRepository } from "../domain/repository/food.repository";
import { GameRepository } from "../domain/repository/game.repository";
import { PlayerRepository } from "../domain/repository/player.repository";
import { SnakeRepository } from "../domain/repository/snake.repository";
import {
	GAME,
	BOARD,
	FOOD,
	SNAKE,
	PLAYER,
} from "../infrastructure/inversify/types";

@injectable()
export class GameService {
	private gameRepository: GameRepository;
	private boardRepository: BoardRepository;
	private foodRepository: FoodRepository;
	private snakeRepository: SnakeRepository;
	private playerRepository: PlayerRepository;

	constructor(
		@inject(GAME) gameRepository: GameRepository,
		@inject(BOARD) boardRepository: BoardRepository,
		@inject(FOOD) foodRepository: FoodRepository,
		@inject(SNAKE) snakeRepository: SnakeRepository,
		@inject(PLAYER) playerRepository: PlayerRepository
	) {
		this.gameRepository = gameRepository;
		this.snakeRepository = snakeRepository;
		this.playerRepository = playerRepository;
		this.boardRepository = boardRepository;
		this.foodRepository = foodRepository;
	}

	async createGame(game: Game) {
		return await this.gameRepository.createGame(game);
	}

	async getGameById(gameId: number) {
		return await this.gameRepository.getGameById(gameId);
	}

	async restartGame(gameId: number, game: Game) {
		return await this.gameRepository.restartGame(gameId, game);
	}

	async setGameStatus(gameId: number, game: Game) {
		return await this.gameRepository.setGameStatus(gameId, game);
	}

}
