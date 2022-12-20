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

	async moveSnake(snake: Snake, stepsToMove: number) {
		return await this.snakeRepository.moveSnake(snake, stepsToMove);
	}

	async getSnakeById(id: number) {
		return this.snakeRepository.getSnakeById(id);
	}

	async updateSnake(newSnake: Snake) {
		return this.snakeRepository.updateSnake(newSnake);
	}

	async eatSnake(snakeId: number, snakeLength: number, snake: Snake) {
		return this.snakeRepository.eatSnake(snakeId, snakeLength, snake);
	}
}
