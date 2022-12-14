import { inject, injectable } from "inversify";
import { Snake } from "../domain/entities/snake.domain";
import { DirectionType } from "../domain/enums/directionType";
import { SnakeRepository } from "../domain/repository/snake.repository";
import { SNAKE } from "../infrastructure/inversify/types";

@injectable()
export class SnakeService implements SnakeRepository {
	private snakeRepository: SnakeRepository;

	constructor(@inject(SNAKE) snakeRepository: SnakeRepository) {
		this.snakeRepository = snakeRepository;
	}

	initialPosition() {
		return this.snakeRepository.initialPosition();
	}
	async createSnake(snake: Snake) {
		return await this.snakeRepository.createSnake(snake);
	}
	async moveSnake(nextMove: DirectionType, snake: Snake) {
		return await this.snakeRepository.moveSnake(nextMove, snake);
	}
	async getSnakeById(id: number) {
		return this.snakeRepository.getSnakeById(id);
	}
	async updateSnake(newSnake: Snake) {
		return this.snakeRepository.updateSnake(newSnake);
	}
	growSnake() {
		return this.snakeRepository.growSnake();
	}
	dieSnake() {
		return this.snakeRepository.dieSnake();
	}
}
