import Amqp = require("amqplib/callback_api");

export class RabbitMQService {
	private amqp;
	private settings;

	constructor() {
		this.amqp = Amqp;
		this.settings = {
			protocol: "amqp",
			hostname: "KARINA-LAPTOP",
			port: 5672,
			username: "admin",
			password: "pass123",
		};
	}

	sendMsgToQueue(queueName: string, msg: string) {
		this.amqp.connect(this.settings, function (error0, connection) {
			if (error0) {
				throw error0;
			}
			connection.createChannel(function (error1, channel) {
				if (error1) {
					throw error1;
				}
				channel.assertQueue(queueName, {
					durable: false,
				});
				channel.sendToQueue(queueName, Buffer.from(msg));

				console.log(`"Sent to [${queueName}]: %s`, msg);
			});

			// setTimeout(function () {
			// 	connection.close();
			// 	process.exit(0);
			// }, 500);
		});
	}

	receiveMsgFromQueue(queueName: string) {
		this.amqp.connect(this.settings, function (error0, connection) {
			if (error0) {
				throw error0;
			}
			connection.createChannel(function (error1, channel) {
				if (error1) {
					throw error1;
				}
				channel.assertQueue(queueName, {
					durable: false,
				});
				console.log(" [*] Waiting ...", queueName);
				channel.consume(
					queueName,
					function (msg: any) {
						console.log(`\n\n=========== ${queueName} Queue ==========`);
						console.log(`queueName: `, msg?.content.toString());
					},
					{
						noAck: true,
					}
				);
			});
			setTimeout(function () {
				connection.close();
				process.exit(0);
			}, 500);
		});
	}
}
