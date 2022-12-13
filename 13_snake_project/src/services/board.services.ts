import { Board } from "../domain/entities/board.domain";
import { BoardRepository } from "../domain/repository/board.repository";

export class BoardService implements BoardRepository {
	createBoard(board: Board): void {
		throw new Error("Method not implemented.");
	}
	createFood!: void;
}
