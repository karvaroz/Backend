import { IStatus } from "../interfaces/status";
export class Game {
	gameId!: number;
	snakeId!: number;
	foodId!: number;
	boardId!: number;
	playerId!: number;
	gameStatus!: IStatus;
}
