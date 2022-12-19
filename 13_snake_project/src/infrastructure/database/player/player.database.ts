import { injectable } from "inversify";
import { PlayerRepository } from "../../../domain/repository/player.repository";
import { AppDataSource } from "../app.dbsource";
import PlayerEntity from "./player.entity";

@injectable()
export default class PlayerDatabase implements PlayerRepository {
	async createPlayer(player: PlayerEntity): Promise<PlayerEntity> {
		const repository = AppDataSource.getRepository(PlayerEntity);
		return await repository.save(player);
	}

	async getPlayerById(playerId: number): Promise<PlayerEntity | null> {
		const repository = AppDataSource.getRepository(PlayerEntity);
		return await repository.findOneBy({ playerId });
	}

	async updatePlayer(player: PlayerEntity): Promise<PlayerEntity> {
		const repository = AppDataSource.getRepository(PlayerEntity);
		return await repository.save(player);
	}

}

