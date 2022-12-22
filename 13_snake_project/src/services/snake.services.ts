import { inject, injectable } from "inversify";
import { Snake } from "../domain/entities/snake.domain";
import { DirectionType } from "../domain/enums/directionType";
import { SnakeRepository } from "../domain/repository/snake.repository";
import { SNAKE } from "../infrastructure/inversify/types";

@injectable()
export class SnakeService {
	private snakeRepository: SnakeRepository;

	constructor(@inject(SNAKE) snakeRepository: SnakeRepository) {
		this.snakeRepository = snakeRepository;
	}

	async createSnake(snake: Snake) {
		return await this.snakeRepository.createSnake(snake);
	}

	async getSnakeById(id: number) {
		return this.snakeRepository.getSnakeById(id);
	}

	async updateSnake(snakeId: number, infoUpdate: Snake) {
		return this.snakeRepository.updateSnake(snakeId, infoUpdate);
	}

	async changeDirection(snakeId: number, direction: string) {
		const snake = await this.snakeRepository.getSnakeById(snakeId);
		snake.snakeDirection = direction;
		await this.snakeRepository.updateSnake(snakeId, snake);
		return snake;
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
		return await this.snakeRepository.updateSnake(snake.snakeId, snake);
	}

	async growSnake(snakeId: number) {
		const snake = await this.snakeRepository.getSnakeById(snakeId);
		snake.snakeLength += 1
		return await this.snakeRepository.updateSnake(snakeId, snake);
	}
}
