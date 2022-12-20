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

	async getPlayerById(playerId: number): Promise<PlayerEntity> {
		const repository = AppDataSource.getRepository(PlayerEntity);
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const result = await repository.findOneBy({ playerId });
		return result!
	}

	async updatePlayer(player: PlayerEntity): Promise<PlayerEntity> {
		const repository = AppDataSource.getRepository(PlayerEntity);
		return await repository.save(player);
	}

}

