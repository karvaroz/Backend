import { injectable } from "inversify";
import { Game } from "../../../domain/entities/game.domain";
import { GameRepository } from "../../../domain/repository/game.repository";
import { AppDataSource } from "../app.dbsource";
import GameEntity from "./game.entity";

@injectable()
export default class GameDatabase implements GameRepository {
	async createGame(game: Game): Promise<Game> {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.save(game);
	}

	async getGameById(gameId: number): Promise<Game | null> {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.findOneBy({ gameId });
	}

	async restartGame(gameId: number, game: Game): Promise<Game> {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.save(game);
	}

	async setGameStatus(gameId: number, game: Game): Promise<Game> {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.save(game);
	}
}

