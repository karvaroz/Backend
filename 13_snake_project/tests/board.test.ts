// import { Board } from "../src/domain/entities/board.domain";
// import { AppDataSource } from "../src/infrastructure/database/app.dbsource";
// import BoardDatabase from "../src/infrastructure/database/board/board.database";
// import BoardEntity from "../src/infrastructure/database/board/board.entity";

// describe("BOARD TESTS", () => {
// 	beforeAll(async () => {
// 		await AppDataSource.initialize();
// 	});

// 	it("should create a board", async () => {
// 		const boardAccess = new BoardDatabase();
// 		const boardDB = new BoardEntity();

// 		boardDB.boardId = 1;
// 		boardDB.boardSize = 10;

// 		const createBoard = await boardAccess.createBoard(boardDB);
// 		expect(createBoard).not.toBeNull();
// 		expect(createBoard.boardId).toEqual(1);
// 	});

// 	it("should get a board by id", async () => {
// 		const boardAccess = new BoardDatabase();
// 		const boardById = await boardAccess.getBoardById(1);
// 		expect(boardById).not.toBeNull();
// 		expect(boardById.boardId).toEqual(1);
// 	});

// 	it("should update a board", async () => {
// 		const infoUpdate: Board = {
// 			boardId: 1,
// 			boardSize: 20,
// 		};
// 		const boardAccess = new BoardDatabase();
// 		const boardUpdate = await boardAccess.modifyBoard(1, infoUpdate);

// 		expect(boardUpdate).not.toBeNull();
// 	});
// });

