import "reflect-metadata";
import { Board } from "../src/domain/entities/board.domain";
import { AppDataSource } from "../src/infrastructure/database/app.dbsource";
import { container } from "../src/infrastructure/inversify/inversify.config";
import { BOARDSERVICE } from "../src/infrastructure/inversify/types";
import { BoardService } from "../src/services/board.services";

describe("BOARD SERVICE", () => {
	const boardService = container.get<BoardService>(BOARDSERVICE);

	let boardTest: Board;

	beforeAll(async () => {
		await AppDataSource.initialize();
		boardTest = await boardService.createBoard(new Board(5, 10));
	});


	it("SHOULD CREATE A BOARD ENTITY", async () => {
		await boardService.createBoard(new Board(6, 10)).then((res) => {
			expect(res instanceof Board).toBeTruthy();
		});
	});

	it("SHOULD READ A BOARD BY ITS ID", async () => {
		await boardService.getBoardById(boardTest.boardId).then((res) => {
			expect(res.boardId).toEqual(1);
		});
	});

	it("SHOULD READ A BOARD BY ITS ID", async () => {
		await boardService.modifyBoard(boardTest).then((res) => {
			expect(res instanceof Board).toBeTruthy();
		});
	});
});
