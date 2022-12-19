import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "../infrastructure/inversify/inversify.config";
import { GAMESERVICE } from "../infrastructure/inversify/types";
import { GameService } from "../services/game.services";

export class GameController {
	gameCreationService = container.get<GameService>(GAMESERVICE);

	async createGame(req: Request, res: Response) {
		try {
			// const game = {
			// 	id: parseInt(req.body.id),
			// 	snakeId: parseInt(req.body.snakeId),
			// 	boardId: parseInt(req.body.boardId),
			// };
            // const newGame = await this.gameCreationService.createGame(game);
            // res.status(200).send(newGame);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	getGameById(req: Request, res: Response) {
		res.status(200).json({
			message: "CREAR BOARD",
		});
	}

	updateGame(req: Request, res: Response) {
		res.status(200).json({
			message: "CREAR BOARD",
		});
	}

	finishGame(req: Request, res: Response) {
		res.status(200).json({
			message: "CREAR BOARD",
		});
	}
}
