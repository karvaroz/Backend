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
			const player = await this.playerCreationService.getPlayerById(
				parseInt(playerId)
			);
			player.score = player.score + req.body.score;
			await this.playerCreationService.createPlayer(player);
			res.status(200).send(player);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async higherScore(req: Request, res: Response) {
		try {
			const getScores = await this.playerCreationService.higherScore();
			let scoreOrdered = getScores.sort((score1, score2) =>
				score1.score < score2.score ? 1 : score1.score > score2.score ? -1 : 0
			);
			res.status(200).send(scoreOrdered);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
