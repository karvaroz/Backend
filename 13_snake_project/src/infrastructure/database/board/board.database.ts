import { BoardRepository } from "../../../domain/repository/board.repository";
import { injectable } from "inversify";
import { AppDataSource } from "../app.dbsource";
import BoardEntity from "./board.entity";
import { Board } from "../../../domain/entities/board.domain";
import { IPosition } from "../../../domain/interfaces/position";

@injectable()
export default class BoardDatabase implements BoardRepository {
	createBoard(board: Board): Promise<Board> {
		throw new Error("Method not implemented.");
	}

	getBoardById(id: number): Promise<Board | null> {
		throw new Error("Method not implemented.");
	}

	modifyBoard(board: Board): Promise<Board> {
		throw new Error("Method not implemented.");
	}
	
	generateRandom(boardSize: number): IPosition {
		throw new Error("Method not implemented.");
	}

}
