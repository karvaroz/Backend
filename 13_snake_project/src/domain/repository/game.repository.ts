import { Game } from "../entities/game.domain";
import { UpdateResult, DeleteResult } from 'typeorm';

export interface GameRepository {
	createGame(game: Game): Promise<Game>;
	getGameById(gameId: number): Promise<Game>;
	updateGame(gameId: number, infoUpdate: Game): Promise<UpdateResult>;
	deleteGame(gameId: number): Promise<DeleteResult>;
}
