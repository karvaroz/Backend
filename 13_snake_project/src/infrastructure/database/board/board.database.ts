import { BoardRepository } from "../../../domain/repository/board.repository";
import { injectable } from "inversify";
import { AppDataSource } from "../app.dbsource";
import BoardEntity from "./board.entity";
import { Board } from "../../../domain/entities/board.domain";
import { UpdateResult } from "typeorm";


@injectable()
export default class BoardDatabase implements BoardRepository {
	async createBoard(board: Board): Promise<Board> {
		const repository = AppDataSource.getRepository(BoardEntity);
		return await repository.save(board);
	}

	async getBoardById(boardId: number): Promise<Board> {
		const repository = AppDataSource.getRepository(BoardEntity);
		const result = await repository.findOneBy({ boardId });
		return result;
	}

	async modifyBoard(boardId: number, infoUpdate: Board): Promise<UpdateResult> {
		const repository = AppDataSource.getRepository(BoardEntity);
		return await repository.update(boardId, infoUpdate)
	}
}
