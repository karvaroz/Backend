import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "../infrastructure/inversify/inversify.config";
import { GAMESERVICE } from "../infrastructure/inversify/types";
import { GameService } from "../services/game.services";

export class GameController {
	gameCreationService = container.get<GameService>(GAMESERVICE);

	async createGame(req: Request, res: Response) {
		try {
			const game = await this.gameCreationService.createGame(req.body);
			res.status(200).send(game);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getGameById(req: Request, res: Response) {
		try {
			const { gameId } = req.params;
			const game = await this.gameCreationService.getGameById(parseInt(gameId));
			res.status(200).send(game);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async restartGame(req: Request, res: Response) {
		try {
			const { gameId } = req.params;
			const game = await this.gameCreationService.getGameById(parseInt(gameId));
			const restart = await this.gameCreationService.restartGame(
				parseInt(gameId),
				game
			);
			res.status(200).send(restart);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async setGameStatus(req: Request, res: Response) {
		try {
			const { gameId } = req.params;
			const game = await this.gameCreationService.getGameById(parseInt(gameId));
			const status = await this.gameCreationService.setGameStatus(
				parseInt(gameId),
				game
			);
			res.status(200).send(status);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
