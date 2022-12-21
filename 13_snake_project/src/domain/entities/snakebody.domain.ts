export class SnakeBody {
	snakeBodyId!: number;
	snakeBodyPositionX!: number;
	snakeBodyPositionY!: number;

	constructor(
		snakeBodyId: number,
		snakeBodyPositionX: number,
		snakeBodyPositionY: number
	) {
		this.snakeBodyId = snakeBodyId;
		this.snakeBodyPositionX = snakeBodyPositionX;
		this.snakeBodyPositionY = snakeBodyPositionY;
	}
}
