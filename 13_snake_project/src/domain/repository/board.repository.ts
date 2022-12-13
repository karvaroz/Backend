import { Board } from "../entities/board.domain";

export interface BoardRepository {
    createBoard: (board: Board) => Board
    createFood: void
}