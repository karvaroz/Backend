import { IStatus } from "../interfaces/status";
export class Game {
	gameId!: number;
	snakeId!: number;
	boardId!: number;
	playerId!: number;
	gameStatus!: IStatus;
}
