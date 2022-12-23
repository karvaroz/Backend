import "reflect-metadata";
import { Board } from "../src/domain/entities/board.domain";
import { AppDataSource } from "../src/infrastructure/database/app.dbsource";
import { container } from "../src/infrastructure/inversify/inversify.config";
import { BOARDSERVICE } from "../src/infrastructure/inversify/types";
import { BoardService } from "../src/services/board.services";
import { UpdateResult } from "typeorm";

describe("BOARD SERVICE", () => {
	const boardService = container.get<BoardService>(BOARDSERVICE);

	let boardTest: Board;

	beforeAll(async () => {
		await AppDataSource.initialize();
		boardTest = await boardService.createBoard(new Board(1, 10));
	});

	// afterAll(async () => {
	// 	await AppDataSource.dropDatabase();
	// 	await AppDataSource.destroy();
	// });

	it("SHOULD CREATE A BOARD ENTITY", async () => {
		await boardService.createBoard(new Board(1, 10)).then((res) => {
			expect(res instanceof Board).toBeTruthy();
		});
	});

	it("SHOULD READ A BOARD BY ITS ID", async () => {
		await boardService.getBoardById(boardTest.boardId).then((res) => {
			expect(res.boardId).toEqual(1);
		});
	});

	it("SHOULD READ A BOARD BY ITS ID", async () => {
		await boardService.modifyBoard(boardTest.boardId, boardTest).then((res) => {
			expect(res).toBeInstanceOf(UpdateResult);
		});
	});
});
