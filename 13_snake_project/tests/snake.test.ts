import { Snake } from "../src/domain/entities/snake.domain";
import { AppDataSource } from "../src/infrastructure/database/app.dbsource";
import { container } from "../src/infrastructure/inversify/inversify.config";
import { SNAKESERVICE } from "../src/infrastructure/inversify/types";
import { SnakeService } from "../src/services/snake.services";

describe("SNAKE SERVICE", () => {
	const snakeService = container.get<SnakeService>(SNAKESERVICE);

	let snakeTest: Snake;

	beforeAll(async () => {
		await AppDataSource.initialize();
		snakeTest = await snakeService.createSnake(new Snake(11, 1, 1, 1, "UP"));
	});

	it("SHOULD CREATE A SNAKE ENTITY", async () => {
		await snakeService
			.createSnake(new Snake(23, 1, 1, 1, "UP"))
			.then(async (res) => {
				expect(res instanceof Snake).toBeTruthy();
			});
	});

	it("SHOULD GET A SNAKE ENTITY BY ID", async () => {
		await snakeService.getSnakeById(snakeTest.snakeId).then(async (res) => {
			expect(res.snakeId).toEqual(snakeTest.snakeId);
		});
	});

	it("SHOULD UPDATE A SNAKE ENTITY", async () => {
		await snakeService
			.updateSnake(snakeTest)
			.then(async (res) => {
				expect(res instanceof Snake).toBeTruthy();
			});
	});

	it("SHOULD GROW A SNAKE ENTITY", async () => {
		await snakeService.growSnake(snakeTest.snakeId)
			.then(async (res) => {
			expect(res instanceof Snake).toBeTruthy();
		});
	});
	it("SHOULD MOVE A SNAKE ENTITY", async () => {
		await snakeService.moveSnake(5, snakeTest.snakeId)
			.then(async (res) => {
			expect(res instanceof Snake).toBeTruthy();
		});
	});
});
