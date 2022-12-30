import { injectable } from "inversify";
import { Game } from "../../../domain/entities/game.domain";
import { GameRepository } from "../../../domain/repository/game.repository";
import { AppDataSource } from "../app.dbsource";
import GameEntity from "./game.entity";

@injectable()
export default class GameDatabase implements GameRepository {
	async createGame(game: Game): Promise<Game> {
		const repository = AppDataSource.getMongoRepository(GameEntity);
		return await repository.save(game);
	}

	async getGameById(gameId: number): Promise<Game> {
		const repository = AppDataSource.getMongoRepository(GameEntity);
		const result = await repository.findOne({
			where: {
				gameId: gameId,
			},
		});
		return result;
	}

	async updateGame(game: Game): Promise<Game> {
		const repository = AppDataSource.getMongoRepository(GameEntity);
		return await repository.save(game);
	}

	async deleteGame(gameId: number): Promise<Boolean> {
		const repository = AppDataSource.getMongoRepository(GameEntity);
		if (await repository.delete({ gameId })) {
			return true;
		}
		return false;
	}
}
