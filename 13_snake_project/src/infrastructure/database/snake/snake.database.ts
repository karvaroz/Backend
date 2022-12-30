import { injectable } from "inversify";
import { Snake } from "../../../domain/entities/snake.domain";
import { SnakeRepository } from "../../../domain/repository/snake.repository";
import { AppDataSource } from "../app.dbsource";
import SnakeEntity from "./snake.entity";

@injectable()
export default class SnakeDatabase implements SnakeRepository {
	async createSnake(snake: Snake): Promise<Snake> {
		const repository = AppDataSource.getMongoRepository(SnakeEntity);
		return await repository.save(snake);
	}

	async getSnakeById(snakeId: number): Promise<Snake> {
		const repository = AppDataSource.getMongoRepository(SnakeEntity);
		const result = await repository.findOne({
			where: {
				snakeId: snakeId,
			},
		});
		return result;
	}

	async updateSnake(snake: Snake): Promise<Snake> {
		const repository = AppDataSource.getMongoRepository(SnakeEntity);
		return await repository.save(snake);
	}
}
