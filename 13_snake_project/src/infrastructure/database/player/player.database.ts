import { injectable } from "inversify";
import { Player } from "../../../domain/entities/player.domain";
import { PlayerRepository } from "../../../domain/repository/player.repository";
import { AppDataSource } from "../app.dbsource";
import PlayerEntity from "./player.entity";

@injectable()
export default class PlayerDatabase implements PlayerRepository {
	async createPlayer(player: Player): Promise<Player> {
		const repository = AppDataSource.getMongoRepository(PlayerEntity);
		return await repository.save(player);
	}

	async getPlayerById(playerId: number): Promise<Player> {
		const repository = AppDataSource.getMongoRepository(PlayerEntity);
		const result = await repository.findOne({
			where: {
				playerId: playerId,
			},
		});
		return result;
	}

	async updatePlayer(player: Player): Promise<Player> {
		const repository = AppDataSource.getMongoRepository(PlayerEntity);
		return await repository.save(player);
	}

	async higherScore(): Promise<Player[]> {
		const repository = AppDataSource.getMongoRepository(PlayerEntity);
		return await repository.find();
	}
}
