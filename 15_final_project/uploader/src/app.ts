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

			const queue = "Uploader Service";
			const msg = "Msg sent to Uploader Service";

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
