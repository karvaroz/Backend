import { SnakeController } from "../controllers/snake.controller";
import { BaseRouter } from "./router";

export class SnakeRouter extends BaseRouter<SnakeController> {
	constructor() {
		super(SnakeController);
	}

	routes(): void {
		this.router.get("/snake", (req, res) => this.controller.getSnake(req, res));
	}
}
