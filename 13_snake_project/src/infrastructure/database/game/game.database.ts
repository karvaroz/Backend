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

	async updateGame(game: Game): Promise<Game> {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.save(game);
	}

	async finishGame(gameId: number): Promise<boolean> {
		const repository = AppDataSource.getRepository(GameEntity);
		return true
	}

	async setGameStatus(gameId: number): Promise<boolean> {
		const repository = AppDataSource.getRepository(GameEntity);
		return true
	}

}

	// async getGameById(id: number) {
	// 	const repository = AppDataSource.getRepository(GameEntity);
	// 	return await repository.findOneBy({ id });
	// }
	// async updateGame(game: GameEntity) {
	// 	const repository = AppDataSource.getRepository(GameEntity);
	// 	return await repository.save(game);
	// }
	// async finishGame(id: number) {
	// 	const repository = AppDataSource.getRepository(GameEntity);
	// 	return await repository.delete({ id });
	// }
