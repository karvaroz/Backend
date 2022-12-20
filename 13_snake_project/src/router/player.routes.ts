import { PlayerController } from "../controllers/player.controller";
import { BaseRouter } from "./router";

export class PlayerRouter extends BaseRouter<PlayerController> {
	constructor() {
		super(PlayerController);
	}

	routes(): void {
		this.router.post("/player/create", (req, res) =>
			this.controller.createPlayer(req, res)
		);
		this.router.get("/player/:id", (req, res) =>
			this.controller.getPlayerById(req, res)
		);
		this.router.post("/player/update/:id", (req, res) =>
			this.controller.updatePlayer(req, res)
		);
	}
}
