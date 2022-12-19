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

	// async moveSnake(infoUpdate: Snake, snakeId: number, setLimit: number) {
	// 	return await this.snakeRepository.moveSnake(infoUpdate, snakeId, setLimit);
	// }

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
