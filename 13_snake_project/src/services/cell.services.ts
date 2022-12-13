import { CellType } from "../domain/enums/cellType";
import { CellRepository } from "../domain/repository/cell.repository";

export class CellService implements CellRepository {
    getCellType(row: number, column: number): void {
        throw new Error("Method not implemented.");
    }
    setCellType(cellType: CellType): CellType {
        throw new Error("Method not implemented.");
    }
    getRow(): number {
        throw new Error("Method not implemented.");
    }
    getColumn(): number {
        throw new Error("Method not implemented.");
    }
}
