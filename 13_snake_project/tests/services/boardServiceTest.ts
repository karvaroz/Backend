import { injectable } from "inversify";
import "reflect-metadata";
import { UpdateResult } from "typeorm";
import { Board } from "../../src/domain/entities/board.domain";
import { BoardRepository } from "../../src/domain/repository/board.repository";

export const testValues = {
	boardId: 2,
	boardSize: 20,
};

// @injectable()
export class BoardServiceTest implements BoardRepository {
	private createBoardTest: jest.Mock;
	private getBoardByIdTest: jest.Mock;
	private modifyBoardTest: jest.Mock;

	constructor() {
		this.createBoardTest = jest.fn();
		this.getBoardByIdTest = jest.fn();
		this.modifyBoardTest = jest.fn();
	}

	async createBoard(board: Board): Promise<Board> {
		await this.createBoardTest(board);
		return new Board(testValues.boardId, testValues.boardSize);
	}

	async getBoardById(boardId: number): Promise<Board> {
		await this.getBoardByIdTest(boardId);
		return new Board(testValues.boardId, testValues.boardSize);
	}

	async modifyBoard(boardId: number, infoUpdate: Board): Promise<UpdateResult> {
		await this.modifyBoardTest(boardId, infoUpdate);
		return new UpdateResult();
	}
}
