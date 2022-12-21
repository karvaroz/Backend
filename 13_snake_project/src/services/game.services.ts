import { inject, injectable } from "inversify";
import { Game } from "../domain/entities/game.domain";
import { FoodRepository } from "../domain/repository/food.repository";
import { GameRepository } from "../domain/repository/game.repository";
import { PlayerRepository } from "../domain/repository/player.repository";
import { FOOD, GAME, PLAYER } from "../infrastructure/inversify/types";
import GenerateRandomNumber from "./utils/generateRandomNumber";

const generateNumber = new GenerateRandomNumber().randomNumber;

@injectable()
export class GameService {
	private gameRepository: GameRepository;
	private foodRepository: FoodRepository;
	private playerRepository: PlayerRepository;

	constructor(
		@inject(GAME) gameRepository: GameRepository,
		@inject(FOOD) foodRepository: FoodRepository,
		@inject(PLAYER) playerRepository: PlayerRepository
	) {
		this.gameRepository = gameRepository;
		this.foodRepository = foodRepository;
		this.playerRepository = playerRepository;
	}

	async createGame(game: Game) {
		return await this.gameRepository.createGame(game);
	}

	async getGameById(gameId: number) {
		return await this.gameRepository.getGameById(gameId);
	}

	async updateGame(gameId: number, infoUpdate: Game) {
		return await this.gameRepository.updateGame(gameId, infoUpdate);
	}

	async deleteGame(gameId: number) {
		return await this.gameRepository.deleteGame(gameId);
	}

	async restartGame(game: Game) {
		const restartFoodPosition = await this.foodRepository.getFoodById(
			game.foodId
		);
		restartFoodPosition.positionX = generateNumber(10);
		restartFoodPosition.positionY = generateNumber(4);

		const restartPlayerScore = await this.playerRepository.getPlayerById(
			game.playerId
		);
		restartPlayerScore.score = 0;

		const restartStatus = await this.gameRepository.getGameById(game.gameId);
		restartStatus.gameStatus = "Ready to start";
		return;
	}
}
