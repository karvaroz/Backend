import { BoardRepository } from "../../../domain/repository/board.repository";
import { injectable } from "inversify";
import { AppDataSource } from "../app.dbsource";
import BoardEntity from "./board.entity";
import { Board } from "../../../domain/entities/board.domain";
import { IPosition } from "../../../domain/interfaces/position";

@injectable()
export default class BoardDatabase implements BoardRepository {
	async createBoard(board: Board) {
		const repository = AppDataSource.getRepository(BoardEntity);
		return await repository.save(board);
	}

	async getBoardById(id: number) {
		const repository = AppDataSource.getRepository(BoardEntity);
		return await repository.findOneBy({ id: id });
	}

	modifyBoard(board: Board): Promise<Board> {
		const repository = AppDataSource.getRepository(BoardEntity);
	}

	generateRandom(boardSize: number): IPosition {
		const repository = AppDataSource.getRepository(BoardEntity);
	}
}
