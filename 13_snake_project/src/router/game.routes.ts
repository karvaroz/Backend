import { GameController } from "../controllers/game.controller";
import { BaseRouter } from "./router";

export class GameRouter extends BaseRouter<GameController> {
	constructor() {
		super(GameController);
	}

	routes(): void {
		this.router.post("/game/create", (req, res) =>
			this.controller.createGame(req, res)
		);
		this.router.get("/game/read/:gameId", (req, res) =>
			this.controller.getGameById(req, res)
		);
		this.router.put("/game/update/:gameId", (req, res) =>
			this.controller.updateGame(req, res)
		);
		this.router.delete("/game/delete/:gameId", (req, res) =>
			this.controller.deleteGame(req, res)
		);
	}
}
