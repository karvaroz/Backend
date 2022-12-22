export class SnakeBody {
	snakeBodyId!: number;
	snakeId!: number;
	snakeX!: number;
	snakeY!: number;
	snakeBodyPositionX!: number;
	snakeBodyPositionY!: number;

	constructor(
		snakeBodyId: number,
		snakeId: number,
		snakeX: number,
		snakeY: number,
		snakeBodyPositionX: number,
		snakeBodyPositionY: number
	) {
		this.snakeBodyId = snakeBodyId;
		this.snakeId = snakeId;
		this.snakeX = snakeX;
		this.snakeY = snakeY;
		this.snakeBodyPositionX = snakeBodyPositionX;
		this.snakeBodyPositionY = snakeBodyPositionY;
	}
}
