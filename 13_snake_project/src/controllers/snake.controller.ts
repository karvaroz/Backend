import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "../infrastructure/inversify/inversify.config";
import { SNAKESERVICE } from "../infrastructure/inversify/types";
import { SnakeService } from "../services/snake.services";

export class SnakeController {
	snakeCreationService = container.get<SnakeService>(SNAKESERVICE);

	initialPosition(req: Request, res: Response) {
		res.status(200).json({
			message: "POSICION INICIAL",
		});
	}

	async createSnake(req: Request, res: Response) {
		try {
			const snake = {
				id: parseInt(req.body.id),
				length: parseInt(req.body.length),
				positionX: parseInt(req.body.positionX),
				positionY: parseInt(req.body.positionY),
			};
			// const newSnake = await this.snakeCreationService.createSnake(snake);
			// res.status(200).send(newSnake);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	moveSnake(req: Request, res: Response) {
		res.status(200).json({
			message: "MOVER SNAKE",
		});
	}

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
