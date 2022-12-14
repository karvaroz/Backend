import { Request, Response } from "express";

export class SnakeController {
	initialPosition(req: Request, res: Response) {
		res.status(200).json({
			message: "POSICION INICIAL",
		});
	}

	createSnake(req: Request, res: Response) {
		res.status(200).json({
			message: "CREAR SNAKE",
		});
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
