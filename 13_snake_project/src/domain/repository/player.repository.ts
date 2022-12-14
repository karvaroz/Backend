import PlayerEntity from "../../infrastructure/database/player/player.entity";

export interface PlayerRepository {
	createPlayer(player: PlayerEntity): Promise<PlayerEntity>;
	getPlayerById(id: number): Promise<PlayerEntity | null>;
	updatePlayer( player: PlayerEntity): Promise<PlayerEntity>;
}