import BoardEntity from "../../infrastructure/database/board/board.entity";

export interface BoardRepository {
	createBoard(board: BoardEntity): Promise<BoardEntity>;
	getBoardById(id: number): Promise<BoardEntity | null>;
	modifyBoard( board: BoardEntity): Promise<BoardEntity>;
}
