import { Snake } from "../entities/snake.domain";

export interface SnakeRepository {
	createSnake(snake: Snake): Promise<Snake>;
	getSnakeById(snakeId: number): Promise<Snake>;
	updateSnake(snake: Snake): Promise<Snake>;
}
