import { Game } from "../entities/game.domain";

export interface GameRepository {
	createGame(game: Game): Promise<Game>;
	getGameById(id: number): Promise<Game | null>;
	updateGame(game: Game): Promise<Game>;
	finishGame(id: number): Promise<boolean>;
	setGameStatus(id: number): Promise<boolean>;
}
