import { inject, injectable } from "inversify";
import { Game } from "../domain/entities/game.domain";
import { GameRepository } from "../domain/repository/game.repository";
import { GAME } from "../infrastructure/inversify/types";

@injectable()
export class GameService implements GameRepository {
	private gameRepository: GameRepository;

	constructor(@inject(GAME) gameRepository: GameRepository) {
		this.gameRepository = gameRepository;
	}

	async createGame(game: Game) {
		return await this.gameRepository.createGame(game);
	}

	async getGameById(id: number) {
		return await this.gameRepository.getGameById(id);
	}

	async updateGame(game: Game) {
		return await this.gameRepository.updateGame(game);
	}

	async finishGame(id: number) {
		return await this.gameRepository.finishGame(id);
	}
}
