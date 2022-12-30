import { Player } from "../entities/player.domain";

export interface PlayerRepository {
	createPlayer(player: Player): Promise<Player>;
	getPlayerById(playerId: number): Promise<Player>;
	updatePlayer(player: Player): Promise<Player>;
	higherScore(): Promise<Player[]>;
}
