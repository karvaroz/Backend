import PlayerEntity from "../../infrastructure/database/player/player.entity";

export interface PlayerRepository {
	createPlayer(player: PlayerEntity): Promise<PlayerEntity>;
	getPlayerById(playerId: number): Promise<PlayerEntity | null>;
	updatePlayer(player: PlayerEntity): Promise<PlayerEntity>;
}