import { Board } from "../entities/board.domain";
import { IPosition } from "../interfaces/position";

export interface BoardRepository {
	createBoard(board: Board): Promise<Board>;
	getBoardById(id: number): Promise<Board | null>;
	modifyBoard(board: Board): Promise<Board>;
	generateRandom(boardSize: number): IPosition;
}
