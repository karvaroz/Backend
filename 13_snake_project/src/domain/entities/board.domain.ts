import { Cell } from "./cell.domain"

export class Board {
	id!: number;
	row_count!: number;
	col_count!: number;
	cells!: Cell[][];
}