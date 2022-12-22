import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "../infrastructure/inversify/inversify.config";
import { SNAKEBODYSERVICE } from "../infrastructure/inversify/types";
import { SnakeBodyService } from "../services/snakeBody.services";

export class SnakeBodyController {
	snakeBodyCreationService = container.get<SnakeBodyService>(SNAKEBODYSERVICE);

	async createSnakeFullBody(req: Request, res: Response) {
		try {
			const newSnakeBody =
				await this.snakeBodyCreationService.createSnakeFullBody(req.body);
			res.status(200).send(newSnakeBody);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getSnakeBodyById(req: Request, res: Response) {
		try {
			const { snakeBodyId } = req.params;
			const snakeBody = await this.snakeBodyCreationService.getSnakeBodyById(
				parseInt(snakeBodyId)
			);
			res.status(200).send(snakeBody);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async updateSnakeBody(req: Request, res: Response) {
		try {
			const { snakeBodyId } = req.params;
			const snakeBody = await this.snakeBodyCreationService.updateSnakeBody(
				parseInt(snakeBodyId),
				req.body
			);
			res.status(200).send(snakeBody);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async deleteSnakeBody(req: Request, res: Response) {
		try {
			const { snakeBodyId } = req.params;
			const snakeBody = await this.snakeBodyCreationService.deleteSnakeBody(
				parseInt(snakeBodyId)
			);
			res.status(200).send(`ID: ${snakeBody} deleted successfully`);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
