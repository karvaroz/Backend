import { UpdateResult } from "typeorm";
import { Snake } from "../entities/snake.domain";
import { DirectionType } from "../enums/directionType";

export interface SnakeRepository {
	createSnake(snake: Snake): Promise<Snake>;
	//  moveSnake(
	//  	infoUpdate: Snake,
	//  	snakeId: number,
	//  	setLimit: number
	//  ): Promise<Snake>;
	getSnakeById(snakeId: number): Promise<Snake | null>;
	updateSnake(newSnake: Snake): Promise<Snake>;
	growSnake(): void;
	dieSnake(): void;
}
