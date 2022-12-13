import { Cell } from "../domain/entities/cell.domain";
import { SnakeRepository } from "../domain/repository/snake.repository";

export class SnakeService implements SnakeRepository{
    initialPosition(initialPos: Cell): void {
        throw new Error("Method not implemented.");
    }
    growSnake(): number {
        throw new Error("Method not implemented.");
    }
    moveSnake(nextCell: Cell): void {
        throw new Error("Method not implemented.");
    }
    checkCrash(): Boolean {
        throw new Error("Method not implemented.");
    }
    
}