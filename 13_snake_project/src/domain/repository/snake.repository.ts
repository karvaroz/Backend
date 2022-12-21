import { Snake } from "../entities/snake.domain";
import { UpdateResult } from 'typeorm';

export interface SnakeRepository {
	createSnake(snake: Snake): Promise<Snake>;
	getSnakeById(snakeId: number): Promise<Snake>;
	updateSnake(snakeId: number, infoUpdate: Snake): Promise<UpdateResult>;
}
