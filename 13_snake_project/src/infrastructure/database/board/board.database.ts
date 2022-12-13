import { BoardRepository } from "../../../domain/repository/board.repository";
import { injectable } from "inversify";
import { Board } from "../../../domain/entities/board.domain";

@injectable()
export default class BoardDatabase implements BoardRepository {
	createBoard(board: Board): void {
		throw new Error("Method not implemented.");
	}
	createFood!: void;
}
