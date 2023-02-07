import amqp = require("amqplib/callback_api");
import express from "express";
import cors from "cors";
import morgan from "morgan";

import { AppDataSource } from "./database/DBsource";
import { UriRouter } from "./api/routes/uri.routes";

amqp.connect(
	{
		protocol: "amqp",
		hostname: "KARINA-LAPTOP",
		port: 5672,
		username: "admin",
		password: "pass123",
	},
	function (error0, connection) {
		if (error0) {
			throw error0;
		}
		connection.createChannel(function (error1, channel) {
			if (error1) {
				throw error1;
			}

			const queue = "Downloader Service";
			const msg = "Msg sent to Downloader Service";

			channel.assertQueue(queue, {
				durable: false,
			});
			channel.sendToQueue(queue, Buffer.from(msg));

			console.log(" [x] Sent %s", msg);
		});

		setTimeout(function () {
			connection.close();
			process.exit(0);
		}, 500);
	}
);

// docker run -d -p 15672:15672 -p 5672:5672 --name rabbit rabbitmq:3-management

class ServerApp {
	public app: express.Application = express();
	private port: number = 3000;

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
		return [new UriRouter().router];
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
	}
}

new ServerApp();
