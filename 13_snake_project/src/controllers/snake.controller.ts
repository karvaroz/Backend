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

	// async moveSnake(req: Request, res: Response) {
	// 	try {
	// 		const snakeToMove = {
	// 			snakeId: parseInt(req.body.snakeId),
	// 			nextMove: req.body.nextMove.toString(),
	// 			setLimit: parseInt(req.body.snakeId),
	// 		};
	// 		const moveSnake = await this.snakeCreationService.moveSnake(
	// 			snakeToMove.nextMove,
	// 			snakeToMove.snakeId,
	// 			snakeToMove.setLimit
	// 		);
	// 		res.status(200).send(moveSnake);
	// 	} catch (error) {
	// 		res.status(500).send({ error: error });
	// 	}
	// }

	getSnakeById(req: Request, res: Response) {
		res.status(200).json({
			message: "TRAER SNAKE",
		});
	}

	updateSnake(req: Request, res: Response) {
		res.status(200).json({
			message: "ACTUALIZAR SNAKE",
		});
	}

	growSnake(req: Request, res: Response) {
		res.status(200).json({
			message: "CRECER SNAKE",
		});
	}

	dieSnake(req: Request, res: Response) {
		res.status(200).json({
			message: "MUERE SNAKE",
		});
	}
}
