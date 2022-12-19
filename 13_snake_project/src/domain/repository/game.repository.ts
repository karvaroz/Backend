import { Game } from "../entities/game.domain";

export interface GameRepository {
	createGame(game: Game): Promise<Game>;
	getGameById(gameId: number): Promise<Game | null>;
	updateGame(game: Game): Promise<Game>;
	finishGame(gameId: number): Promise<boolean>;
	setGameStatus(gameId: number): Promise<boolean>;
}
