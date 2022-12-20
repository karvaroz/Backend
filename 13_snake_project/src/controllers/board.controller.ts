import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "../infrastructure/inversify/inversify.config";
import { BOARDSERVICE } from "../infrastructure/inversify/types";
import { BoardService } from "../services/board.services";

export class BoardController {
	boardCreationService = container.get<BoardService>(BOARDSERVICE);

	async createBoard(req: Request, res: Response) {
		try {
			const board = {
				boardId: parseInt(req.body.boardId),
				width: parseInt(req.body.width),
				height: parseInt(req.body.height),
			};
			const newBoard = await this.boardCreationService.createBoard(board);
			res.status(200).send({
				message: newBoard,
				board: Array(req.body.width).fill(".".repeat(req.body.width))
			});
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getBoardById(req: Request, res: Response) {
		try {
			const boardId = parseInt(req.body.boardId);
			const geBoard = await this.boardCreationService.getBoardById(boardId);
			res.status(200).send(geBoard);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async modifyBoard(req: Request, res: Response) {
		try {
			const boardId = parseInt(req.body.boardId);
			const boardToUpdate = await this.boardCreationService.getBoardById(
				boardId
			);
			if (boardToUpdate) {
				boardToUpdate.height = parseInt(req.body.height);
				boardToUpdate.width = parseInt(req.body.width);
				res.status(200).send(boardToUpdate);
			}
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
