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

	async updateGame(req: Request, res: Response) {
		try {
			const { gameId } = req.params;
			const updateGame = await this.gameCreationService.updateGame(
				parseInt(gameId),
				req.body
			);
			res.status(200).send({
				msg: "Successfully updated game",
				updateGame,
			});
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async deleteGame(req: Request, res: Response) {
		try {
			const { gameId } = req.params;
			const deleteGame = await this.gameCreationService.deleteGame(
				parseInt(gameId)
			);
			res
				.status(200)
				.send(`ID GAME: ${deleteGame.affected} deleted successfully`);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
