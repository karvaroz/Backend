import { Board } from "../entities/board.domain";

export interface BoardRepository {
	createBoard(board: Board): void;
	createFood: void;
}
