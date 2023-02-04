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

			const queueDownloaderService = "Downloader Service";
			const queueUploaderService = "Uploader Service";

			channel.assertQueue(queueDownloaderService, {
				durable: false,
			});

			channel.assertQueue(queueUploaderService, {
				durable: false,
			});

			console.log(
				" [*] Stats waiting for messages from:\n",
        `${queueDownloaderService}\n`,
        ` ${queueUploaderService}\n`
			);

			channel.consume(
				queueDownloaderService,
				function (msg) {
					console.log(" [x] Received %s", msg?.content.toString());
				},
				{
					noAck: true,
				}
			);

			channel.consume(
				queueUploaderService,
				function (msg) {
					console.log(" [x] Received %s", msg?.content.toString());
				},
				{
					noAck: true,
				}
			);
		});
	}
);
