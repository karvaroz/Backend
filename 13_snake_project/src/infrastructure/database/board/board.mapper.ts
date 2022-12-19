import { Board } from "../../../domain/entities/board.domain";
import boardEntity from "./board.entity";

export class boardMapper {
	static boardToEntity(board: boardEntity) {
		const createBoardEntity: Board = new Board();
		createBoardEntity.boardId = board.boardId;
		createBoardEntity.height = board.height;
		createBoardEntity.width = board.width;
        return createBoardEntity;
	}
}
