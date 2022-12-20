import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "../infrastructure/inversify/inversify.config";
import { SNAKESERVICE } from "../infrastructure/inversify/types";
import { SnakeService } from "../services/snake.services";
import GenerateRandomNumber from "../services/utils/generateRandomNumber";

const generateNumber = new GenerateRandomNumber().randomNumber;

export class SnakeController {
	snakeCreationService = container.get<SnakeService>(SNAKESERVICE);

	async createSnake(req: Request, res: Response) {
		try {
			const snake = {
				snakeId: parseInt(req.body.snakeId),
				snakeLength: 1,
				snakePositionX: generateNumber(parseInt(req.body.maxValuePositionX)),
				snakePositionY: generateNumber(parseInt(req.body.maxValuePositionY)),
				snakeDirection: req.body.snakeDirection.toString(),
			};
			const newSnake = await this.snakeCreationService.createSnake(snake);
			res.status(200).send(newSnake);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async moveSnake(req: Request, res: Response) {
		try {
			const snakeId = parseInt(req.body.snakeId);
			const snake = await this.snakeCreationService.getSnakeById(snakeId);

			if (snake) {
				
				snake.snakeDirection = req.body.nextMove.toString();
				const updateSnakePosition = await this.snakeCreationService.updateSnake(
					snake
				);
				const snakePosition = await this.snakeCreationService.moveSnake(
					updateSnakePosition,
					parseInt(req.body.stepsToMove)
				);
				res.status(200).send(updateSnakePosition);
			}
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getSnakeById(req: Request, res: Response) {
		try {
			const snakeId = parseInt(req.body.snakeId);
			const getSnakeId = await this.snakeCreationService.getSnakeById(snakeId);
			res.status(200).send(getSnakeId);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async updateSnake(req: Request, res: Response) {
		try {
			const snakeId = parseInt(req.body.snakeId);
			const snakeToUpdate = await this.snakeCreationService.getSnakeById(
				snakeId
			);
			if (snakeToUpdate) {
				snakeToUpdate.snakeLength = parseInt(req.body.snakeLength);
				snakeToUpdate.snakePositionX = parseInt(req.body.snakePositionX);
				snakeToUpdate.snakePositionY = parseInt(req.body.snakePositionY);
				snakeToUpdate.snakeDirection = req.body.snakeDirection;
				const snakeUpdated = await this.snakeCreationService.updateSnake(
					snakeToUpdate
				);
				res.status(200).send(snakeUpdated);
			}
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async eatSnake(req: Request, res: Response) {
		try {
			const snakeId = parseInt(req.body.snakeId);
			const snake = await this.snakeCreationService.getSnakeById(snakeId);
			if (snake) {
				snake.snakeLength += parseInt(req.body.extraPoints);
				const snakeUpdated = await this.snakeCreationService.updateSnake(snake);
				res.status(200).send(snakeUpdated);
			}
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
