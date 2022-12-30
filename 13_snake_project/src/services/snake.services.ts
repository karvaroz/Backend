import { inject, injectable } from "inversify";
import { Snake } from "../domain/entities/snake.domain";
import { DirectionType } from "../domain/enums/directionType";
import { SnakeRepository } from "../domain/repository/snake.repository";
import { SNAKE, BOARD } from "../infrastructure/inversify/types";
import { BoardRepository } from "../domain/repository/board.repository";

@injectable()
export class SnakeService {
	private snakeRepository: SnakeRepository;
	private boardRepository: BoardRepository;

	constructor(
		@inject(SNAKE) snakeRepository: SnakeRepository,
		@inject(BOARD) boardRepository: BoardRepository
	) {
		this.snakeRepository = snakeRepository;
		this.boardRepository = boardRepository;
	}

	async createSnake(snake: Snake) {
		return await this.snakeRepository.createSnake(snake);
	}

	async getSnakeById(id: number) {
		return this.snakeRepository.getSnakeById(id);
	}

	async updateSnake(snake: Snake) {
		return this.snakeRepository.updateSnake(snake);
	}

	async changeDirection(snakeId: number, direction: string) {
		const snake = await this.snakeRepository.getSnakeById(snakeId);
		snake.snakeDirection = direction;
		await this.snakeRepository.updateSnake(snake);
		return snake;
	}

	async moveSnakeNextPosition(snakeId: number) {
		const snake = await this.getSnakeById(snakeId);
		const limitBoard = (await this.boardRepository.getBoardById(snakeId))
			.boardSize;
		await this.moveSnake(limitBoard, snakeId);
		return await this.updateSnake(snake);
	}

	async moveSnake(boardSize: number, snakeId: number) {
		const snake = await this.snakeRepository.getSnakeById(snakeId);
		if (snake.snakeDirection == DirectionType.UP) {
			snake.snakePositionY =
				snake.snakePositionY < boardSize ? ++snake.snakePositionY : 0;
		} else if (snake.snakeDirection == DirectionType.DOWN) {
			snake.snakePositionY =
				snake.snakePositionY > 0 ? --snake.snakePositionY : boardSize;
		} else if (snake.snakeDirection == DirectionType.RIGHT) {
			snake.snakePositionX =
				snake.snakePositionX < boardSize ? ++snake.snakePositionX : 0;
		} else if (snake.snakeDirection == DirectionType.LEFT) {
			snake.snakePositionX =
				snake.snakePositionX > 0 ? --snake.snakePositionX : boardSize;
		}
		return await this.snakeRepository.updateSnake(snake);
	}

	async growSnake(snakeId: number) {
		const snake = await this.snakeRepository.getSnakeById(snakeId);
		snake.snakeLength = snake.snakeLength + 1
		return await this.snakeRepository.updateSnake(snake);
	}
}
