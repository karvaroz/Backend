import { BoardController } from "../controllers/board.controller";
import { BaseRouter } from "./router";

export class BoardRouter extends BaseRouter<BoardController> {
	constructor() {
		super(BoardController);
	}

	routes(): void {
		this.router.post("/board/create", (req, res) =>
			this.controller.createBoard(req, res)
		);
		this.router.get("/board/:id", (req, res) =>
			this.controller.getBoardById(req, res)
		);
		this.router.put("/board/update/:id", (req, res) =>
			this.controller.modifyBoard(req, res)
		);
	}
}
