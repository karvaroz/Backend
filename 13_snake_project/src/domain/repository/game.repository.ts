import { Game } from "../entities/game.domain";

export interface GameRepository {
	createGame(game: Game): Promise<Game>;
	getGameById(gameId: number): Promise<Game>;
	updateGame(game: Game): Promise<Game>;
	deleteGame(gameId: number): Promise<Boolean>;
}
