import { injectable } from "inversify";
import { Snake } from "../../../domain/entities/snake.domain";
import { DirectionType } from "../../../domain/enums/directionType";
import { SnakeRepository } from "../../../domain/repository/snake.repository";
import { AppDataSource } from "../app.dbsource";
import SnakeEntity from "./snake.entity";

@injectable()
export default class SnakeDatabase implements SnakeRepository {
	async createSnake(snake: Snake): Promise<Snake> {
		const repository = AppDataSource.getRepository(SnakeEntity);
		return await repository.save(snake);
	}
	// async moveSnake(
	// 	nextMove: string,
	// 	snakeId: number,
	// 	setLimit: number
	// ): Promise<Snake> {
	// 	const repository = AppDataSource.getRepository(SnakeEntity);
	// 	return await repository.save(nextMove, snakeId, setLimit);
	// }
	async getSnakeById(snakeId: number): Promise<Snake | null> {
		const repository = AppDataSource.getRepository(SnakeEntity);
		return repository.findOneBy({ snakeId });
	}
	async updateSnake(newSnake: Snake): Promise<Snake> {
		const repository = AppDataSource.getRepository(SnakeEntity);
		return await repository.save(newSnake);
	}
	growSnake(): void {
		const repository = AppDataSource.getRepository(SnakeEntity);
		console.log("GROW");
	}
	dieSnake(): void {
		const repository = AppDataSource.getRepository(SnakeEntity);
		console.log("Die");
	}
}
