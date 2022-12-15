import { DeleteResult } from "typeorm";
import gameEntity from "../../infrastructure/database/game/game.entity";

export interface GameRepository {
	createGame(game: gameEntity): Promise<gameEntity>;
	getGameById(id: number): Promise<gameEntity | null>;
	updateGame(game: gameEntity): Promise<gameEntity>;
	finishGame(id: number): Promise<DeleteResult>;
}
