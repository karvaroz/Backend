import { Request, Response } from "express";
import "reflect-metadata";

import { container } from "../infrastructure/inversify/inversify.config";
import {
	BOARDSERVICE,
	FOODSERVICE,
	GAMESERVICE,
	PLAYERSERVICE,
	SNAKESERVICE,
} from "../infrastructure/inversify/types";

import { BoardService } from "../services/board.services";
import { FoodService } from "../services/food.services";
import { GameService } from "../services/game.services";
import { PlayerService } from "../services/player.services";
import { SnakeService } from "../services/snake.services";

export class GameController {
	gameCreationService = container.get<GameService>(GAMESERVICE);
	boardCreationService = container.get<BoardService>(BOARDSERVICE);
	snakeCreationService = container.get<SnakeService>(SNAKESERVICE);
	playerCreationService = container.get<PlayerService>(PLAYERSERVICE);
	foodCreationService = container.get<FoodService>(FOODSERVICE);

	async createGame(req: Request, res: Response) {
		try {
			const board = await this.boardCreationService.createBoard({
				boardId: 10,
				width: 25,
				height: 25,
			});
			const snake = await this.snakeCreationService.createSnake({
				snakeId: 10,
				snakeLength: 1,
				snakePositionX: 10,
				snakePositionY: 15,
				snakeDirection: "UP",
			});
			const food = await this.foodCreationService.generateFood({
				idFood: 10,
				positionX: 10,
				positionY: 20,
			});
			const player = await this.playerCreationService.createPlayer({
				playerId: 10,
				name: "prueba",
				score: 0,
			});

			const game = {
				gameId: parseInt(req.body.gameId),
				snakeId: snake.snakeId,
				foodId: food.idFood,
				boardId: board.boardId,
				playerId: player.playerId,
				gameStatus: req.body.gameStatus.toString(),
			};
			const newGame = await this.gameCreationService.createGame(game);
			res.status(200).send(newGame);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getGameById(req: Request, res: Response) {
		try {
			const gameId = parseInt(req.body.gameId);
			const game = await this.gameCreationService.getGameById(gameId);
			res.status(200).send(game);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async restartGame(req: Request, res: Response) {
		try {
			const getGameId = await this.gameCreationService.getGameById(
				parseInt(req.body.gameId)
			);
			if (getGameId) {
				const getBoardId = await this.boardCreationService.getBoardById(
					getGameId.boardId
				);
				const getSnakeId = await this.snakeCreationService.getSnakeById(
					getGameId.snakeId
				);
				const getFoodId = await this.foodCreationService.getFoodById(
					getGameId.foodId
				);
				const getPlayerId = await this.playerCreationService.getPlayerById(
					getGameId.playerId
				);
				const getGameStatus = req.body.gameStatus.toString();
			}
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	setGameStatus(req: Request, res: Response) {
		res.status(200).json({
			message: "CREAR BOARD",
		});
	}
}
