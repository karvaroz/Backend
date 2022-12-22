import { SnakeBody } from '../entities/snakebody.domain';
import { UpdateResult, DeleteResult } from 'typeorm';

export interface SnakeBodyRepository {
	createSnakeFullBody(snakeBody: SnakeBody): Promise<SnakeBody>;
	getSnakeBodyById(snakeBodyId: number): Promise<SnakeBody[]>;
	updateSnakeBody(snakeBodyId: number, updateInfo: SnakeBody): Promise<UpdateResult>;
	deleteSnakeBody(snakeBodyId: number): Promise<DeleteResult>;
}