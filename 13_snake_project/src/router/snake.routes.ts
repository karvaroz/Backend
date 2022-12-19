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
		this.router.put("/snake/update/:id", (req, res) =>
			this.controller.updateSnake(req, res)
		);
		this.router.post("/snake/grow/:id", (req, res) =>
			this.controller.growSnake(req, res)
		);
		this.router.post("snake/die/:id", (req, res) =>
			this.controller.dieSnake(req, res)
		);
	}
}
