import { injectable } from "inversify";
import { PlayerRepository } from "../../../domain/repository/player.repository";
import { AppDataSource } from "../app.dbsource";
import PlayerEntity from "./player.entity";

@injectable()
export default class PlayerDatabase implements PlayerRepository {
	createPlayer(player: PlayerEntity): Promise<PlayerEntity> {
		throw new Error("Method not implemented.");
	}
	getPlayerById(id: number): Promise<PlayerEntity | null> {
		throw new Error("Method not implemented.");
	}
	updatePlayer(player: PlayerEntity): Promise<PlayerEntity> {
		throw new Error("Method not implemented.");
	}

}

	// async createPlayer(player: PlayerEntity) {
	// 	const repository = AppDataSource.getRepository(PlayerEntity);
	// 	return await repository.save(player);
	// }
	// async getPlayerById(id: number) {
	// 	const repository = AppDataSource.getRepository(PlayerEntity);
	// 	return await repository.findOneBy({ id });
	// }
	// async updatePlayer(player: PlayerEntity) {
	// 	const repository = AppDataSource.getRepository(PlayerEntity);
	// 	return await repository.save(player);
	// }
