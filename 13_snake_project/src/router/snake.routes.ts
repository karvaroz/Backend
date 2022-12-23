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
		this.router.get("/snake/read/:snakeId", (req, res) =>
			this.controller.getSnakeById(req, res)
		);
		this.router.put("/snake/update/:snakeId", (req, res) =>
			this.controller.updateSnake(req, res)
		);
		this.router.post("/snake/direction/:snakeId/", (req, res) =>
			this.controller.changeDirection(req, res)
		);
		this.router.post("/snake/move/:snakeId", (req, res) =>
			this.controller.moveSnake(req, res)
		);
		this.router.get("/snake/grow/:snakeId", (req, res) =>
			this.controller.growSnake(req, res)
		);
	}
}
