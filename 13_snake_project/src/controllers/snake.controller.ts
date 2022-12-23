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

	async getSnakeById(req: Request, res: Response) {
		try {
			const { snakeId } = req.params;
			const snake = await this.snakeCreationService.getSnakeById(
				parseInt(snakeId)
			);
			res.status(200).send(snake);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async updateSnake(req: Request, res: Response) {
		try {
			const { snakeId } = req.params;
			const snakeUpdated = await this.snakeCreationService.updateSnake(
				parseInt(snakeId),
				req.body
			);
			res.status(200).send({
				msg: "Successfully updated snake",
				snakeUpdated,
			});
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async changeDirection(req: Request, res: Response) {
		try {
			const { snakeId } = req.params;
			const { snakeDirection } = req.query;
			const newSnakeDirection = await this.snakeCreationService.changeDirection(
				parseInt(snakeId),
				snakeDirection.toString()
			);
			res.status(200).send(newSnakeDirection);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async moveSnake(req: Request, res: Response) {
		try {
			const { snakeId } = req.params;
			const moveSnakeTo = await this.snakeCreationService.moveSnake(
				parseInt(req.body.boardSize),
				parseInt(snakeId)
			);
			res.status(200).send(moveSnakeTo);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async growSnake(req: Request, res: Response) {
		try {
			const { snakeId } = req.params;
			const snake = await this.snakeCreationService.growSnake(
				parseInt(snakeId)
			);
			res.status(200).send(`Snake ID: ${snakeId} grew +1`);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
