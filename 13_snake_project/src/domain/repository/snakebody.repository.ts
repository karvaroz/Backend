import { SnakeBody } from '../entities/snakebody.domain';
import { UpdateResult, DeleteResult } from 'typeorm';

export interface SnakeBodyRepository {
	createSnakeFullBody(snakeId: number, snakeBody: SnakeBody): Promise<SnakeBody>;
	getSnakeBodyById(snakeId: number): Promise<SnakeBody[]>;
	updateSnakeBody(snakeId: number, snakeBody: SnakeBody): Promise<UpdateResult>;
	deleteSnakeBody(snakeId: number): Promise<DeleteResult>;
}