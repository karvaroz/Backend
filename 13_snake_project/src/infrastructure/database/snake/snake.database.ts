import { injectable } from "inversify";
import { Snake } from "../../../domain/entities/snake.domain";
import { SnakeRepository } from "../../../domain/repository/snake.repository";
import { AppDataSource } from "../app.dbsource";
import SnakeEntity from "./snake.entity";
import { UpdateResult } from 'typeorm';

@injectable()
export default class SnakeDatabase implements SnakeRepository {
	async createSnake(snake: Snake): Promise<Snake> {
		const repository = AppDataSource.getRepository(SnakeEntity);
		return await repository.save(snake);
	}

	async getSnakeById(snakeId: number): Promise<Snake> {
		const repository = AppDataSource.getRepository(SnakeEntity);
		const result = await repository.findOneBy({ snakeId });
		return result;
	}

	async updateSnake(snakeId: number, infoUpdate: Snake): Promise<UpdateResult> {
		const repository = AppDataSource.getRepository(SnakeEntity);
		return await repository.update(snakeId, infoUpdate);
	}
}
