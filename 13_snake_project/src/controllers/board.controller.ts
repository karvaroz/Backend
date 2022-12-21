import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "../infrastructure/inversify/inversify.config";
import { BOARDSERVICE } from "../infrastructure/inversify/types";
import { BoardService } from "../services/board.services";

export class BoardController {
	boardCreationService = container.get<BoardService>(BOARDSERVICE);

	async createBoard(req: Request, res: Response) {
		try {
			const newBoard = await this.boardCreationService.createBoard(req.body);
			res.status(200).send({
				newBoard,
				board: Array(req.body.boardSize).fill(".".repeat(req.body.boardSize)),
			});
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getBoardById(req: Request, res: Response) {
		try {
			const { boardId } = req.params;
			const board = await this.boardCreationService.getBoardById(
				parseInt(boardId)
			);
			res.status(200).send(board);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async modifyBoard(req: Request, res: Response) {
		try {
			const { boardId } = req.params;
			const data = await this.boardCreationService.modifyBoard(
				parseInt(boardId),
				req.body
			);
			res.status(200).send({
				msg: "Successfully updated board",
				data
			});
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
