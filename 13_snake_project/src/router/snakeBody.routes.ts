import { SnakeBodyController } from "../controllers/snakeBody.controller";
import { BaseRouter } from "./router";

export class SnakeBodyRouter extends BaseRouter<SnakeBodyController> {
	constructor() {
		super(SnakeBodyController);
	}

	routes(): void {
		this.router.post("/snakebody/create", (req, res) =>
			this.controller.createSnakeFullBody(req, res)
		);

		this.router.get("/snakebody/read/:snakeBodyId", (req, res) =>
			this.controller.getSnakeBodyById(req, res)
		);

		this.router.put("/snakebody/update/:snakeBodyId", (req, res) =>
			this.controller.updateSnakeBody(req, res)
		);

		this.router.delete("/snakebody/delete/:snakeBodyId", (req, res) =>
			this.controller.deleteSnakeBody(req, res)
		);
	}
}
