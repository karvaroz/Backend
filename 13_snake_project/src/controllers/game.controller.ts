import { Request, Response } from "express";
import "reflect-metadata";
import { Board } from "../domain/entities/board.domain";
import { Food } from "../domain/entities/food.domain";
import { Player } from "../domain/entities/player.domain";
import { Snake } from "../domain/entities/snake.domain";
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
import { Game } from "../domain/entities/game.domain";
import GenerateRandomNumber from "../services/utils/generateRandomNumber";

const generateNumber = new GenerateRandomNumber().randomNumber;

export class GameController {
	boardCreationService = container.get<BoardService>(BOARDSERVICE);
	foodCreationService = container.get<FoodService>(FOODSERVICE);
	playerCreationService = container.get<PlayerService>(PLAYERSERVICE);
	snakeCreationService = container.get<SnakeService>(SNAKESERVICE);
	gameCreationService = container.get<GameService>(GAMESERVICE);

	async createGame(req: Request, res: Response) {
		try {
			const board = await this.boardCreationService.createBoard(
				new Board(1, req.body.size)
			);
			const snake = await this.snakeCreationService.createSnake(
				new Snake(1, 1, generateNumber(10), generateNumber(7), "UP")
			);
			const food = await this.foodCreationService.generateFood(
				new Food(1, generateNumber(5), generateNumber(7))
			);
			const player = await this.playerCreationService.createPlayer(
				new Player(1, "name", 0)
			);

			const game = new Game(
				1,
				snake.snakeId,
				food.idFood,
				board.boardId,
				player.playerId,
				"Ready to start"
			);
			await this.gameCreationService.createGame(game);
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

	async restartGame(req: Request, res: Response) {
		try {
			const { gameId } = req.params;
			const game = await this.gameCreationService.getGameById(parseInt(gameId));
			const restart = await this.gameCreationService.restartGame(game);
			res.status(200).send(`GAME restarted successfully`);
			// res.status(200).send(restart);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
