import { inject, injectable } from "inversify";
import { Snake } from "../domain/entities/snake.domain";
import { DirectionType } from "../domain/enums/directionType";
import { SnakeRepository } from "../domain/repository/snake.repository";
import { SNAKE, SNAKEBODY, BOARD } from "../infrastructure/inversify/types";
import { SnakeBodyRepository } from "../domain/repository/snakebody.repository";
import { BoardRepository } from "../domain/repository/board.repository";
import { SnakeBody } from "../domain/entities/snakebody.domain";

@injectable()
export class SnakeService {
	private snakeRepository: SnakeRepository;
	private snakeBodyRepository: SnakeBodyRepository;
	private boardRepository: BoardRepository;

	constructor(
		@inject(SNAKE) snakeRepository: SnakeRepository,
		@inject(SNAKEBODY) snakeBodyRepository: SnakeBodyRepository,
		@inject(BOARD) boardRepository: BoardRepository
	) {
		this.snakeRepository = snakeRepository;
		this.snakeBodyRepository = snakeBodyRepository;
		this.boardRepository = boardRepository;
	}

	// Crea la cabeza de la snake
	async createSnake(snake: Snake) {
		return await this.snakeRepository.createSnake(snake);
	}

	// Lee la cabeza de la snake
	async getSnakeById(id: number) {
		return this.snakeRepository.getSnakeById(id);
	}

	// Actualiza la cabeza de la snake
	async updateSnake(snakeId: number, infoUpdate: Snake) {
		return this.snakeRepository.updateSnake(snakeId, infoUpdate);
	}

	// Cambia la dirección del snake
	async changeDirection(snakeId: number, direction: string) {
		const snake = await this.snakeRepository.getSnakeById(snakeId);
		snake.snakeDirection = direction;
		await this.snakeRepository.updateSnake(snakeId, snake);
		return snake;
	}

	// Mueve la cabeza y el cuerpo del snake
	async moveSnakeAndBody(snakeId: number) {
		const limitBoard = (await this.boardRepository.getBoardById(snakeId))
			.boardSize;
		await this.moveSnake(limitBoard, snakeId);
		await this.moveSnakeAndBody(snakeId);
	}

	// Mueve la cabeza del snake
	async moveSnakeNextPosition(snakeId: number) {
		const snake = await this.getSnakeById(snakeId);
		const limitBoard = (await this.boardRepository.getBoardById(snakeId))
			.boardSize;
		const moveToNextPosition = await this.moveSnake(limitBoard, snakeId);
		// snake.
		await this.updateSnake(snakeId, snake);
		return console.log(moveToNextPosition);
	}

	// Mueve a la nueva posicion en el tablero
	async moveSnake(boardSize: number, snakeId: number) {
		const snake = await this.snakeRepository.getSnakeById(snakeId);
		if (snake.snakeDirection == DirectionType.UP) {
			snake.snakePositionY =
				snake.snakePositionY < boardSize ? ++snake.snakePositionY : 0;
		} else if (snake.snakeDirection == DirectionType.DOWN) {
			snake.snakePositionY =
				snake.snakePositionY > 0 ? --snake.snakePositionY : boardSize;
		} else if (snake.snakeDirection == DirectionType.RIGHT) {
			snake.snakePositionX =
				snake.snakePositionX < boardSize ? ++snake.snakePositionX : 0;
		} else if (snake.snakeDirection == DirectionType.LEFT) {
			snake.snakePositionX =
				snake.snakePositionX > 0 ? --snake.snakePositionX : boardSize;
		}
		return await this.snakeRepository.updateSnake(snake.snakeId, snake);
	}

	// Crece toda la snake
	async growSnakeAndBody(snakeId: number) {
		const newSnakeSize = await this.createSnakeBody(snakeId);
		// const newSnakeBody = await this.
	}

	// Crece la cabeza de la snake
	async growSnake(snakeId: number) {
		const snake = await this.snakeRepository.getSnakeById(snakeId);
		snake.snakeLength += 1;
		return await this.snakeRepository.updateSnake(snakeId, snake);
	}

	// Crea el cuerpo del snake
	async createSnakeBody(snakeBodyId: number) {
		const snake = await this.snakeRepository.getSnakeById(snakeBodyId);
		const snakeBodyArray = await this.snakeBodyRepository.getSnakeBodyById(
			snakeBodyId
		);
		const newSnakeBody: SnakeBody = {
			snakeBodyId: 0,
			snakeId: 0,
			snakeX: 0,
			snakeY: 0,
			snakeBodyPositionX: 0,
			snakeBodyPositionY: 0,
		};
		return await this.snakeBodyRepository.createSnakeFullBody(newSnakeBody);
	}

	async getSnakeBodyById(snakeBodyId: number) {
		return await this.snakeBodyRepository.getSnakeBodyById(snakeBodyId);
	}

	// Mueve el cuerpo de la snake
	async moveSnakeBody(snakeBodyId: number) {
		const snake = await this.snakeRepository.getSnakeById(snakeBodyId);
		const snakeBodyArray = await this.snakeBodyRepository.getSnakeBodyById(
			snakeBodyId
		);
	}

	// Muestra la colision de la snake
	async checkSnakeCollision(snakeId: number) {
		const snake = await this.snakeRepository.getSnakeById(snakeId)
		const snakeBodyArray = await this.snakeBodyRepository.getSnakeBodyById(
			snakeId
		);
	}
}
