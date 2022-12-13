import { CellType } from "../enums/cellType";

export class Cell {
	id!: number;
	row!: number;
	column!: number;
	cellType!: CellType;
}
