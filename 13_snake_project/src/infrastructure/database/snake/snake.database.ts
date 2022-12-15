import { injectable } from "inversify";
import { Snake } from "../../../domain/entities/snake.domain";
import { DirectionType } from "../../../domain/enums/directionType";
import { SnakeRepository } from "../../../domain/repository/snake.repository";
import { AppDataSource } from "../app.dbsource";
import SnakeEntity from "./snake.entity";

@injectable()
export default class SnakeDatabase implements SnakeRepository {
	initialPosition() {
		const repository = AppDataSource.getRepository(SnakeEntity);
		return console.log("Position inicial");
	}

	async createSnake(snake: SnakeEntity) {
		const repository = AppDataSource.getRepository(SnakeEntity);
		return repository.save(snake);
	}

	moveSnake(nextMove: DirectionType, snake: SnakeEntity) {
		const repository = AppDataSource.getRepository(SnakeEntity);
		return console.log("MOVER");
	}

	async getSnakeById(id: number) {
		const repository = AppDataSource.getRepository(SnakeEntity);
		return repository.findOneBy({ id });
	}

	async updateSnake(newSnake: SnakeEntity) {
		const repository = AppDataSource.getRepository(SnakeEntity);
		return await repository.save(newSnake);
	}

	async growSnake() {
		const repository = AppDataSource.getRepository(SnakeEntity);
		console.log("GROW");
	}

	async dieSnake() {
		const repository = AppDataSource.getRepository(SnakeEntity);
		console.log("Die");
	}
}
