import { injectable } from "inversify";
import { UpdateResult, DeleteResult, FindManyOptions } from "typeorm";
import { SnakeBody } from "../../../domain/entities/snakebody.domain";
import { SnakeBodyRepository } from "../../../domain/repository/snakebody.repository";
import { AppDataSource } from "../app.dbsource";
import SnakeBodyEntity from "./snakeBody.entity";

@injectable()
export default class SnakeBodyDatabase implements SnakeBodyRepository {
	async createSnakeFullBody(snakeBody: SnakeBody): Promise<SnakeBody> {
		const repository = AppDataSource.getRepository(SnakeBodyEntity);
		return await repository.save(snakeBody);
	}

	async getSnakeBodyById(snakeBodyId: number): Promise<SnakeBody[]> {
		const repository = AppDataSource.getRepository(SnakeBodyEntity);
		const findSnakeBodies: FindManyOptions<SnakeBodyEntity> = {
			where: { snakeBodyId: snakeBodyId },
		};
		return await repository.find(findSnakeBodies);
	}

	async updateSnakeBody(
		snakeBodyId: number,
		updateInfo: SnakeBody
	): Promise<UpdateResult> {
		const repository = AppDataSource.getRepository(SnakeBodyEntity);
		return await repository.update(snakeBodyId, updateInfo);
	}

	async deleteSnakeBody(snakeBodyId: number): Promise<DeleteResult> {
		const repository = AppDataSource.getRepository(SnakeBodyEntity);
		return await repository.delete(snakeBodyId);
	}
}
