import { injectable } from "inversify";
import { Game } from "../../../domain/entities/game.domain";
import { GameRepository } from "../../../domain/repository/game.repository";
import { AppDataSource } from "../app.dbsource";
import GameEntity from "./game.entity";

@injectable()
export default class GameDatabase implements GameRepository {
	createGame(game: Game): Promise<Game> {
		throw new Error("Method not implemented.");
	}
	getGameById(id: number): Promise<Game | null> {
		throw new Error("Method not implemented.");
	}
	updateGame(game: Game): Promise<Game> {
		throw new Error("Method not implemented.");
	}
	finishGame(id: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	setGameStatus(id: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}

}

	// async createGame(game: GameEntity) {
	// 	const repository = AppDataSource.getRepository(GameEntity);
	// 	return await repository.save(game);
	// }
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
