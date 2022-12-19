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
			res.status(200).send(newBoard);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	getBoardById(req: Request, res: Response) {
		res.status(200).json({
			message: "TRAER BOARD",
		});
	}

	modifyBoard(req: Request, res: Response) {
		res.status(200).json({
			message: "TMODIFICAR BOARD",
		});
	}
}
