import { FileController } from "../controllers/file.controller";
import { BaseRouter } from "../router";

export class FileRouter extends BaseRouter<FileController> {
	constructor() {
		super(FileController);
	}

	routes(): void {
		this.router.post("/file", (req, res) =>
			this.controller.createFile(req, res)
		);

		this.router.get("/file", (req, res) =>
			this.controller.getAllFiles(req, res)
		);

		this.router.get("/file/:id", (req, res) =>
			this.controller.getFileById(req, res)
		);

		this.router.put("/file/:id", (req, res) =>
			this.controller.updateFile(req, res)
		);

		this.router.delete("/file/:id", (req, res) =>
			this.controller.deleteFile(req, res)
		);
	}
}
