import { inject, injectable } from "inversify";
import { Snake } from "../domain/entities/snake.domain";
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
}
