import { BoardRepository } from "../../../domain/repository/board.repository";
import { injectable } from "inversify";
import { AppDataSource } from "../app.dbsource";
import BoardEntity from "./board.entity";
import { Board } from "../../../domain/entities/board.domain";
import { IPosition } from "../../../domain/interfaces/position";

@injectable()
export default class BoardDatabase implements BoardRepository {
	async createBoard(board: Board): Promise<Board> {
		const repository = AppDataSource.getRepository(BoardEntity);
		return await repository.save(board);
	}
	async getBoardById(boardId: number): Promise<Board | null> {
		const repository = AppDataSource.getRepository(BoardEntity);
		return await repository.findOneBy({boardId});
	}

	async modifyBoard(board: Board): Promise<Board> {
		const repository = AppDataSource.getRepository(BoardEntity);
		return await repository.save(board);
	}

	generateRandom(boardSize: number): IPosition {
		throw new Error("Method not implemented.");
	}
}
