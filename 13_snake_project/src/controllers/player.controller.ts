import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "../infrastructure/inversify/inversify.config";
import { PlayerService } from "../services/player.services";
import { PLAYERSERVICE } from "../infrastructure/inversify/types";

export class PlayerController {
	playerCreationService = container.get<PlayerService>(PLAYERSERVICE);

	async createPlayer(req: Request, res: Response) {
		try {
			const newPlayer = await this.playerCreationService.createPlayer(req.body);
			res.status(200).send(newPlayer);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getPlayerById(req: Request, res: Response) {
		try {
			const { playerId } = req.params;
			const newPlayer = await this.playerCreationService.getPlayerById(
				parseInt(playerId)
			);
			res.status(200).send(newPlayer);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async updatePlayer(req: Request, res: Response) {
		try {
			const { playerId } = req.params;
			const updateScore = await this.playerCreationService.updatePlayer(
				parseInt(playerId),
				req.body
			);
			res.status(200).send({
				msg: "Successfully updated player",
				updateScore,
			});
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async higherScore(req: Request, res: Response) {
		try {
			const getScores = await this.playerCreationService.higherScore();
			res.status(200).send(getScores);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
