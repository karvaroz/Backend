import { Cell } from "../entities/cell.domain";

export interface SnakeRepository{
    initialPosition(initialPos: Cell): void;
    growSnake(): number;
    moveSnake(nextCell: Cell): void;
    checkCrash(): Boolean
}