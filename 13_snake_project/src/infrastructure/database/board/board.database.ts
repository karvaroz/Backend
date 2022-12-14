import { BoardRepository } from "../../../domain/repository/board.repository";
import { injectable } from "inversify";
import { AppDataSource } from "../app.dbsource";
import BoardEntity from "./board.entity";

@injectable()
export default class BoardDatabase implements BoardRepository {
	async createBoard(board: BoardEntity) {
		const repository = AppDataSource.getRepository(BoardEntity);
		return await repository.save(board);
	}

	async getBoardById(id: number) {
		const repository = AppDataSource.getRepository(BoardEntity);
		return await repository.findOneBy({ id });
	}

	async modifyBoard(board: BoardEntity) {
		const repository = AppDataSource.getRepository(BoardEntity);
		return await repository.save(board);
	}
}
