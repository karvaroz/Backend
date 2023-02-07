const amqp = require("amqplib");

async function topicExchangePublisher() {
    try {
        const rabbitmqUrl = "amqp://localhost";
        const connection = await amqp.connect(rabbitmqUrl);

        let channel = await connection.createChannel();

        //Create Topic Exchange
        channel.assertExchange("my-topic-exchange", "topic")

        //Create the Queues
        channel.assertQueue("HealthQ");
        channel.assertQueue("SportsQ");
        channel.assertQueue("EducationQ");

        //Create bindings - (queue, exchange, routingKey)
        channel.bindQueue("HealthQ", "my-topic-exchange", "health.*");
        channel.bindQueue("SportsQ", "my-topic-exchange", "#.sports.*");
        channel.bindQueue("EducationQ", "my-topic-exchange", "#.education");

        // Sending messages -exchangeName, key, msg
        channel.publish("my-topic-exchange", "health.education", Buffer.from("Drink a lot of Water and stay Healthy!"))
        channel.publish("my-topic-exchange", "sports.sports", Buffer.from("Exercise every day"))
        channel.publish("my-topic-exchange", "education", Buffer.from("Learn something new everyday"))
        channel.publish("my-topic-exchange", "education.health", Buffer.from("Stay fit in Mind and Body"))



        //  messages to route
        channel.consume(
            "HealthQ",
            function (msg: any) {
                console.log("\n\n=========== Health Queue ==========")
                console.log("HealthQ: ", msg?.content.toString());
            },
            {
                noAck: true,
            }
        );

        channel.consume(
            "SportsQ",
            function (msg: any) {
                console.log("\n\n=========== Sports Queue ==========")
                console.log("SportsQ: ", msg?.content.toString());
            },
            {
                noAck: true,
            }
        );

        channel.consume(
            "EducationQ",
            function (msg: any) {
                console.log("\n\n=========== Education Queue ==========")
                console.log("EducationQ: ", msg?.content.toString());
            },
            {
                noAck: true,
            }
        );

    } catch (error) {
        console.error(error);
    }
}
topicExchangePublisher();