import { injectable } from "inversify";
import { UpdateResult, DeleteResult } from "typeorm";
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
	async getGameById(gameId: number): Promise<Game> {
		const repository = AppDataSource.getRepository(GameEntity);
		const result = await repository.findOneBy({ gameId });
		return result;
	}
	async updateGame(gameId: number, infoUpdate: Game): Promise<UpdateResult> {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.update(gameId, infoUpdate);
	}
	async deleteGame(gameId: number): Promise<DeleteResult> {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.delete({ gameId });
	}
}
