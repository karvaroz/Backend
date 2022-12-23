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
		this.router.get("/food/read/:idFood", (req, res) =>
			this.controller.getFoodById(req, res)
		);
		this.router.delete("/food/delete/:idFood", (req, res) =>
			this.controller.deleteFood(req, res)
		);
		this.router.put("/food/update/:idFood", (req, res) =>
			this.controller.updateFood(req, res)
		);
	}
}
