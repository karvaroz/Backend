import amqp = require("amqplib/callback_api");

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
