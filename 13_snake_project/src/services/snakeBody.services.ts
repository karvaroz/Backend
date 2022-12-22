import { inject, injectable } from "inversify";
import { SnakeBody } from "../domain/entities/snakebody.domain";
import { SnakeBodyRepository } from "../domain/repository/snakebody.repository";
import { SNAKEBODY } from "../infrastructure/inversify/types";

@injectable()
export class SnakeBodyService {
	private snakeBodyRepository: SnakeBodyRepository;

	constructor(@inject(SNAKEBODY) snakeBodyRepository: SnakeBodyRepository) {
		this.snakeBodyRepository = snakeBodyRepository;
	}

	async createSnakeFullBody(snakeBody: SnakeBody) {
		return await this.snakeBodyRepository.createSnakeFullBody(snakeBody);
	}

	async getSnakeBodyById(snakeBodyId: number) {
		return await this.snakeBodyRepository.getSnakeBodyById(snakeBodyId);
	}

	async updateSnakeBody(snakeBodyId: number, updateInfo: SnakeBody) {
		return await this.snakeBodyRepository.updateSnakeBody(
			snakeBodyId,
			updateInfo
		);
	}

	async deleteSnakeBody(snakeBodyId: number) {
		return await this.snakeBodyRepository.deleteSnakeBody(snakeBodyId);
	}
}
