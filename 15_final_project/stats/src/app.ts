import express from "express";
import { RabbitMQService } from "./services/rabbitMQ/rabbitmqService";

class ServerApp {
	public app: express.Application = express();
	private port: number = 3002;

	constructor() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.listen();
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log("Server listening on port " + this.port);
		});
		new RabbitMQService().receiveMsgFromQueue("Starts Service");
	}
}


new ServerApp();
