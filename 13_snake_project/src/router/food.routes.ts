import { FoodController } from "../controllers/food.controller";
import { BaseRouter } from "./router";

export class FoodRouter extends BaseRouter<FoodController> {
	constructor() {
		super(FoodController);
	}

	routes(): void {
		this.router.post("/food/create", (req, res) =>
			this.controller.generateFood(req, res)
		);
		this.router.post("/food/read", (req, res) =>
			this.controller.getFoodById(req, res)
		);
		this.router.post("/food/delete", (req, res) =>
			this.controller.deleteFood(req, res)
		);
	}
}
