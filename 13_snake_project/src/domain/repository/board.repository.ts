import { UpdateResult } from "typeorm";
import { Board } from "../entities/board.domain";

export interface BoardRepository {
	createBoard(board: Board): Promise<Board>;
	getBoardById(boardId: number): Promise<Board>;
	modifyBoard(boardId: number, infoUpdate: Board): Promise<UpdateResult>;
}
