import { Snake } from "../entities/snake.domain";
import { DirectionType } from "../enums/directionType";

export interface SnakeRepository {
	createSnake(snake: Snake): Promise<Snake>;
	moveSnake(nextMove: DirectionType, snake: Snake, setLimit: number): Promise<Snake>;
	getSnakeById(id: number): Promise<Snake | null>;
	updateSnake( newSnake: Snake): Promise<Snake>;
	growSnake(): void;
	dieSnake(): void;
}