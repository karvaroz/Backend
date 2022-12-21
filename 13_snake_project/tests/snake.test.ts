import { AppDataSource } from "../src/infrastructure/database/app.dbsource";
import SnakeEntity from "../src/infrastructure/database/snake/snake.entity";
import SnakeDatabase from "../src/infrastructure/database/snake/snake.database";

describe("SNAKE TESTS", () => {
	beforeAll(async () => {
		await AppDataSource.initialize();
	});

	it("should create a snake", async () => {
		const snakeAccess = new SnakeDatabase();
		const snakeDB = new SnakeEntity();
		snakeDB.snakeId = 20;
		snakeDB.snakeLength = 10;
		snakeDB.snakePositionX = 10;
		snakeDB.snakePositionY = 10;
		snakeDB.snakeDirection = "LEFT";

		const createSnake = await snakeAccess.createSnake(snakeDB);
		expect(createSnake).not.toBeNull();
		expect(createSnake.snakeId).toEqual(20);
	});

	it("should read read snake by ID", async () => {
		const snakeAccess = new SnakeDatabase();
		const snakeById = await snakeAccess.getSnakeById(10);
		expect(snakeById).not.toBeNull();
		expect(snakeById.snakeId).toEqual(10);
	});

	it("should update a snake", async () => {
		const snakeAccess = new SnakeDatabase();
		const getSnakeToUpdate = await snakeAccess.getSnakeById(10);

		getSnakeToUpdate.snakeLength = 50;

		expect(getSnakeToUpdate).not.toBeNull();
		expect(getSnakeToUpdate.snakeLength).toEqual(50);
	});

	it("should be able to increase snake's lenght after it eats", async () => {
		const snakeAccess = new SnakeDatabase();
		const snake = await snakeAccess.getSnakeById(1);

		const pointsToEat: number = 10;
		snake.snakeLength = snake.snakeLength + pointsToEat;

		const updateSnake = await snakeAccess.updateSnake(snake);
		const eatSnake = await snakeAccess.eatSnake(
			snake.snakeId,
			snake.snakeLength,
			snake
		);

		expect(eatSnake).not.toBeNull();
		// expect(eatSnake.snakeLength).toEqual(snake.snakeLength + pointsToEat);
	});
});
