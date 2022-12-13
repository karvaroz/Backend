import express from "express";
import cors from "cors";
import morgan from "morgan";
import { SnakeRouter } from './router/snake.routes';

class ServerApp {
	public app: express.Application = express();
	private port: number = 3000;

	constructor() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(morgan("dev"));
		this.app.use(cors());
		// this.app.get("/api", (req, res) => {
		// 	res.status(200).json({
		// 		message: "SNAKE GAME",
		// 	});
		// });
		this.app.use("/api", this.routers())
		this.listen();
	}
	routers(): Array<express.Router>  {
		return [new SnakeRouter().router]
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log("listening on port " + this.port);
		});
	}
}

new ServerApp();
