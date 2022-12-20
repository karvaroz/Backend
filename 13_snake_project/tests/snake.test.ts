import "reflect-metadata";
import { Container } from "inversify";

import { SnakeService } from "../src/services/snake.services";
import { SNAKESERVICE, SNAKE } from "../src/infrastructure/inversify/types";

import { SnakeRepository } from "../src/domain/repository/snake.repository";
import SnakeDatabase from "../src/infrastructure/database/snake/snake.database";
import { Snake } from "../src/domain/entities/snake.domain";

let snakeService: SnakeService;

beforeEach(() => {
	const container = new Container();
	container.bind<SnakeRepository>(SNAKESERVICE).to(SnakeService);
	container.bind<SnakeRepository>(SNAKE).to(SnakeDatabase);
	snakeService = container.get<SnakeService>(SNAKESERVICE);
});

test("Should create a snake", async () => {
	const newSnake = await snakeService.createSnake(
		new Snake(11, 1, 10, 15, "LEFT")
	);

	expect(newSnake).not.toBeNull();
});
