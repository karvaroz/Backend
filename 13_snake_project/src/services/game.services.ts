import { inject, injectable } from "inversify";
import { Game } from "../domain/entities/game.domain";
import { GameRepository } from "../domain/repository/game.repository";
import { GAME } from "../infrastructure/inversify/types";

@injectable()
export class GameService {
	private gameRepository: GameRepository;

	constructor(@inject(GAME) gameRepository: GameRepository) {
		this.gameRepository = gameRepository;
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
}
