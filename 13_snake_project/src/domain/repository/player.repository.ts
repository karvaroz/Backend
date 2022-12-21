import { Player } from "../entities/player.domain";
import { UpdateResult } from "typeorm";

export interface PlayerRepository {
	createPlayer(player: Player): Promise<Player>;
	getPlayerById(playerId: number): Promise<Player>;
	updatePlayer(playerId: number, infoUpdate: Player): Promise<UpdateResult>;
	higherScore(): Promise<Player[]>;
}
