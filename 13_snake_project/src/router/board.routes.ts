import { BoardController } from "../controllers/board.controller";
import { BaseRouter } from "./router";

export class BoardRouter extends BaseRouter<BoardController> {
	constructor() {
		super(BoardController);
	}

	routes(): void {
		this.router.get("/board", (req, res) => "");
	}
}
