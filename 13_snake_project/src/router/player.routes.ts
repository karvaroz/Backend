import { PlayerController } from "../controllers/player.controller";
import { BaseRouter } from "./router";

export class PlayerRouter extends BaseRouter<PlayerController> {
	constructor() {
		super(PlayerController);
	}

	routes(): void {
		this.router.get("/player", (req, res) => "");
	}
}
