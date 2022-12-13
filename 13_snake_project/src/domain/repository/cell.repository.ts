import { CellType } from "../enums/cellType";

export interface CellRepository {
	getCellType(row: number, column: number): void;
	setCellType(cellType: CellType): CellType;
	getRow(): number;
	getColumn(): number;
}