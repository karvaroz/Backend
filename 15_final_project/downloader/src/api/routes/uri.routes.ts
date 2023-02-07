import { UriController } from "../controllers/uri.controller";
import { BaseRouter } from "../router";

export class UriRouter extends BaseRouter<UriController> {
	constructor() {
		super(UriController);
	}

	routes(): void {
		this.router.post("/uri", (req, res) => this.controller.createUri(req, res));

		this.router.get("/uri", (req, res) => this.controller.getAllUris(req, res));

		this.router.get("/uri/:id", (req, res) =>
			this.controller.getUriById(req, res)
		);

		this.router.put("/uri/:id", (req, res) =>
			this.controller.updateUri(req, res)
		);

		this.router.delete("/uri/:id", (req, res) =>
			this.controller.deleteUri(req, res)
		);
	}
}
