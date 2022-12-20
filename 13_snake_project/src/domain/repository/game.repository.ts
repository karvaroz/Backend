import { Game } from "../entities/game.domain";

export interface GameRepository {
	createGame(game: Game): Promise<Game>;
	getGameById(gameId: number): Promise<Game>;
	restartGame(gameId: number, game: Game): Promise<Game>;
	setGameStatus(gameId: number, game: Game): Promise<Game>;
}
