import { inject, injectable } from "inversify";
import { Board } from "../domain/entities/board.domain";
import { BoardRepository } from "../domain/repository/board.repository";
import { BOARD } from "../infrastructure/inversify/types";

@injectable()
export class BoardService {
	private boardRepository: BoardRepository;

	constructor(@inject(BOARD) boardRepository: BoardRepository) {
		this.boardRepository = boardRepository;
	}

	async createBoard(board: Board) {
		return await this.boardRepository.createBoard(board);
	}

	async getBoardById(id: number) {
		return await this.boardRepository.getBoardById(id);
	}

	async modifyBoard(board: Board) {
		return await this.boardRepository.modifyBoard(board);
	}

	generateRandom(boardSize: number) {
		return this.boardRepository.generateRandom(boardSize);
	}
}
