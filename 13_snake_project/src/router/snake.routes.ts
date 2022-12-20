import { SnakeController } from "../controllers/snake.controller";
import { BaseRouter } from "./router";

export class SnakeRouter extends BaseRouter<SnakeController> {
	constructor() {
		super(SnakeController);
	}

	routes(): void {
		this.router.post("/snake/create", (req, res) =>
			this.controller.createSnake(req, res)
		);
		//  this.router.post("/snake/move/:id", (req, res) =>
		//  	this.controller.moveSnake(req, res)
		//  );
		this.router.get("/snake/read", (req, res) =>
			this.controller.getSnakeById(req, res)
		);
		this.router.post("/snake/update", (req, res) =>
			this.controller.updateSnake(req, res)
		);
	}
}
