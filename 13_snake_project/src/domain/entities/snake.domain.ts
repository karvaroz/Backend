import { Cell } from "./cell.domain"

export class Snake {
	id!: number;
	length!: number;
	posX!: number;
	posY!: number;
	head!: Cell;
}