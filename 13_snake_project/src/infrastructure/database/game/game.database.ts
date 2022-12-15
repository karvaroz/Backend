import { injectable } from "inversify";
import { GameRepository } from "../../../domain/repository/game.repository";
import { AppDataSource } from "../app.dbsource";
import GameEntity from "./game.entity";

@injectable()
export default class GameDatabase implements GameRepository {
	async createGame(game: GameEntity) {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.save(game);
	}
	async getGameById(id: number) {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.findOneBy({ id });
	}
	async updateGame(game: GameEntity) {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.save(game);
	}
	async finishGame(id: number) {
		const repository = AppDataSource.getRepository(GameEntity);
		return await repository.delete({ id });
	}
}
