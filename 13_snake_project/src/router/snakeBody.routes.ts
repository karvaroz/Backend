
import { SnakeBodyController } from "../controllers/snakeBody.controller";
import { BaseRouter } from "./router";

export class SnakeBodyRouter extends BaseRouter<SnakeBodyController> {
	constructor() {
		super(SnakeBodyController);
	}

	routes(): void {

	}
}
