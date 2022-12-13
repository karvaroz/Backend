import express from "express";
import cors from "cors";
import morgan from "morgan";
import { SnakeRouter } from "./router/snake.routes";
import { AppDataSource } from "./infrastructure/database/app.dbsource";

class ServerApp {
	public app: express.Application = express();
	private port: number = 3000;

	constructor() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));

		this.dbConnect();

		this.app.use(morgan("dev"));
		this.app.use(cors());

		this.app.use("/api", this.routers());
		this.listen();
	}
	routers(): Array<express.Router> {
		return [new SnakeRouter().router];
	}

	async dbConnect() {
		try {
			console.log("Conexión Correcta a la Base de datos");
			return await AppDataSource.initialize();
		} catch (error) {
			return console.log("Error: " + error);
		}
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log("listening on port " + this.port);
		});
	}
}

new ServerApp();
