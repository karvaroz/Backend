export class Snake {
	snakeId!: number;
	snakeLength!: number;
	snakePositionX!: number;
	snakePositionY!: number;
	snakeDirection!: string;

	constructor(
		snakeId: number,
		snakeLength: number,
		snakePositionX: number,
		snakePositionY: number,
		snakeDirection: string
	) {
		this.snakeId = snakeId;
		this.snakeLength = snakeLength;
		this.snakePositionX = snakePositionX;
		this.snakePositionY = snakePositionY;
		this.snakeDirection = snakeDirection;
	}
}
