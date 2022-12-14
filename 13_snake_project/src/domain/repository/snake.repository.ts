import SnakeEntity from "../../infrastructure/database/snake/snake.entity";
import { DirectionType } from "../enums/directionType";

export interface SnakeRepository {
	initialPosition(): void;
	createSnake(snake: SnakeEntity): Promise<SnakeEntity>;
	moveSnake(nextMove: DirectionType, snake: SnakeEntity): void;
	getSnakeById(id: number): Promise<SnakeEntity | null>;
	updateSnake( newSnake: SnakeEntity): Promise<SnakeEntity>;
	growSnake(): void;
	dieSnake(): void;
}