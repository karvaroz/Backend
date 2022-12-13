import { Request, Response } from "express";

export class SnakeController {
    getSnake(req: Request, res: Response) {
        res.status(200).json({
            message: "get snake"
        })
    }
}