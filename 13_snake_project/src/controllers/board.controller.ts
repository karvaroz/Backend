import { Request, Response } from "express";

export class BoardController {
	createBoard(req: Request, res: Response) {
		res.status(200).json({
			message: "CREAR BOARD",
		});
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
