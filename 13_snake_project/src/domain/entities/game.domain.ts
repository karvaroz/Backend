export class Game {
	gameId!: number;
	snakeId!: number;
	foodId!: number;
	boardId!: number;
	playerId!: number;
	gameStatus!: string;

	constructor(
		gameId: number,
		snakeId: number,
		foodId: number,
		boardId: number,
		playerId: number,
		gameStatus: string
	) {
		this.gameId = gameId;
		this.snakeId = snakeId;
		this.foodId = foodId;
		this.boardId = boardId;
		this.playerId = playerId;
		this.gameStatus = gameStatus;
	}
}
