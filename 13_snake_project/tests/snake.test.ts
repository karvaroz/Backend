import { AppDataSource } from "../src/infrastructure/database/app.dbsource";
import SnakeEntity from "../src/infrastructure/database/snake/snake.entity";
import SnakeDatabase from '../src/infrastructure/database/snake/snake.database';

describe("SNAKE SERVICE TESTS", () => {
	beforeAll(async () => {
		await AppDataSource.initialize();
	});

	it("should create a snake", async () => {
		const snakeAccess = new SnakeDatabase()
		const snakeDB = new SnakeEntity();
		snakeDB.snakeId = 20
		snakeDB.snakeLength = 10
		snakeDB.snakePositionX = 10
		snakeDB.snakePositionY = 10
		snakeDB.snakeDirection = "LEFT"

		const createSnake = await snakeAccess.createSnake(snakeDB);
		expect(createSnake).not.toBeNull()
		expect(createSnake.snakeId).toEqual(20)

	});
});
