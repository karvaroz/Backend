import "reflect-metadata";
import { Game } from "../src/domain/entities/game.domain";
import { container } from "../src/infrastructure/inversify/inversify.config";
import { GAMESERVICE } from "../src/infrastructure/inversify/types";
import { GameService } from "../src/services/game.services";
import { AppDataSource } from "../src/infrastructure/database/app.dbsource";
import { UpdateResult, DeleteResult } from "typeorm";

describe("GAME SERVICE", () => {
	const gameService = container.get<GameService>(GAMESERVICE);

	let gameTest: Game;

	beforeAll(async () => {
		await AppDataSource.initialize();
		gameTest = await gameService.createGame(
			new Game(1, 1, 1, 1, 1, "Ready to play")
		);
	});


	it("SHOULD CREATE A GAME ENTITY", async () => {
		await gameService
			.createGame(new Game(1, 1, 1, 1, 1, "Ready to play"))
			.then(async (res) => {
				expect(res instanceof Game).toBeTruthy();
			});
	});

	it("SHOULD CREATE A GAME ENTITY", async () => {
		await gameService.getGameById(gameTest.gameId).then(async (res) => {
			expect(res.gameId).toEqual(1);
		});
	});

	it("SHOULD UPDATE A GAME ENTITY", async () => {
		await gameService
			.updateGame(gameTest.gameId, gameTest)
			.then(async (res) => {
				expect(res).toBeInstanceOf(UpdateResult);
			});
	});

	it("SHOULD DELETE A GAME ENTITY", async () => {
        await gameService.deleteGame(gameTest.gameId)
            .then(async (res) => {
			expect(res).toBeInstanceOf(DeleteResult);
		});
	});

});
