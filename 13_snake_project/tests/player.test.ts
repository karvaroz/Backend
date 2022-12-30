import "reflect-metadata";
import { Player } from "../src/domain/entities/player.domain";
import { AppDataSource } from "../src/infrastructure/database/app.dbsource";
import { container } from "../src/infrastructure/inversify/inversify.config";
import { PLAYERSERVICE } from "../src/infrastructure/inversify/types";
import { PlayerService } from "../src/services/player.services";

describe("PLAYER SERVICES", () => {
	const playerService = container.get<PlayerService>(PLAYERSERVICE);

	let playerTest: Player;
	let playerTest3: Player;

	beforeAll(async () => {
		await AppDataSource.initialize();
		playerTest = await playerService.createPlayer(new Player(11, "PEDRO", 0));
		playerTest3 = await playerService.createPlayer(new Player(31, "PEDRO", 0));
	});


	it("SHOULD CREATE AN PLAYER ENTITY", async () => {
		const playerTest = await playerService
			.createPlayer(new Player(10, "PEDRO", 0))
			.then(async (res) => {
				expect(res instanceof Player).toBeTruthy();
			});
	});

	it("SHOULD FIND AN PLAYER ENTITY", async () => {
		await playerService
			.getPlayerById(playerTest3.playerId)
			.then(async (res) => {
				expect(res.playerId).toEqual(3);
			});
	});

	it("SHOULD UPDATE AN PLAYER ENTITY", async () => {
		await playerService
			.updatePlayer(playerTest3)
			.then(async (res) => {
				expect(res instanceof Player).toBeTruthy();
			});
	});
});
