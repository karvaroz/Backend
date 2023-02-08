import express from "express";
import cors from "cors";
import morgan from "morgan";

import { FileRouter } from "./api/routes/file.routes";
import { AccountRouter } from "./api/routes/account.routes";

import { AppDataSource } from "./database/DBsource";

import { RabbitMQService } from "./services/rabbitmq.service";

class ServerApp {
	public app: express.Application = express();
	private port: number = 3001;

	constructor() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));

		this.dbConnect();

		this.app.use(morgan("dev"));
		this.app.use(cors());

		this.app.use("/api", this.routers());
		this.listen();
	}

	routers(): Array<express.Router> {
		return [
			new FileRouter().router,
			new AccountRouter().router
		];
	}

	async dbConnect() {
		try {
			console.log("DB Connection succeeded");
			return await AppDataSource.initialize();
		} catch (error) {
			return console.log("Error: " + error);
		}
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log("Server listening on port " + this.port);
		});
		// new RabbitMQService().receiveMsgFromQueue("Downloader Service");
		// new RabbitMQService().receiveMsgFromQueue("Uploader Service");
	}
}

new ServerApp();
