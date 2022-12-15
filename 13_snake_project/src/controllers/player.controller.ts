import { Request, Response } from "express";
import { PlayerRepository } from "../domain/repository/player.repository";
import { container } from "../infrastructure/inversify/inversify.config";
import { PlayerService } from "../services/player.services";
import { PLAYERSERVICE } from "../infrastructure/inversify/types";
import { Player } from "../domain/entities/player.domain";

export class PlayerController {
	playerCreationService = container.get<PlayerService>(PLAYERSERVICE);

	async createPlayer(req: Request, res: Response) {
		try {
			const player = {
				id: parseInt(req.body.id),
				name: req.body.name.toString(),
				score: parseInt(req.body.score),
			};
			const newPlayer = await this.playerCreationService.createPlayer(player);
			res.status(200).send(newPlayer)
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
	getPlayerById(req: Request, res: Response) {
		res.status(200).json({
			message: "TRAER PLAYER",
		});
	}
	updatePlayer(req: Request, res: Response) {
		res.status(200).json({
			message: "ACTUALIZAR PLAYER",
		});
	}
}
