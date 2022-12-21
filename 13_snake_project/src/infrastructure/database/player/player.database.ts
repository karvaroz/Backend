import { injectable } from "inversify";
import { Player } from "../../../domain/entities/player.domain";
import { PlayerRepository } from "../../../domain/repository/player.repository";
import { AppDataSource } from "../app.dbsource";
import { UpdateResult } from "typeorm";
import PlayerEntity from "./player.entity";

@injectable()
export default class PlayerDatabase implements PlayerRepository {
	async createPlayer(player: Player): Promise<Player> {
		const repository = AppDataSource.getRepository(PlayerEntity);
		return await repository.save(player);
	}

	async getPlayerById(playerId: number): Promise<Player> {
		const repository = AppDataSource.getRepository(PlayerEntity);
		const result = await repository.findOneBy({ playerId });
		return result;
	}

	async updatePlayer(
		playerId: number,
		infoUpdate: Player
	): Promise<UpdateResult> {
		const repository = AppDataSource.getRepository(PlayerEntity);
		return await repository.update(playerId, infoUpdate);
	}

	async higherScore(): Promise<Player[]> {
		const repository = AppDataSource.getRepository(PlayerEntity);
		return await repository.find();
	}
}
