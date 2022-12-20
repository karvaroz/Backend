import { Snake } from "../entities/snake.domain";

export interface SnakeRepository {
	createSnake(snake: Snake): Promise<Snake>;
	moveSnake(snake: Snake, stepsToMove: number): Promise<Snake>;
	getSnakeById(snakeId: number): Promise<Snake>;
	updateSnake(newSnake: Snake): Promise<Snake>;
	eatSnake(snakeId: number, snakeLength: number, snake: Snake): Promise<Snake>;
}
