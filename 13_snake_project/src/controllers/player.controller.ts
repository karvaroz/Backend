import { Request, Response } from "express";

export class PlayerController {
	createPlayer(req: Request, res: Response) {
		res.status(200).json({
			message: "CREAR PLAYER",
		});
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
