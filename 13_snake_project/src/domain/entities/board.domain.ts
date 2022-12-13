import { Cell } from "./cell.domain"

export class Board {
    row_count!: number
    col_count!: number
    cell!: Cell[][]
}