import { injectable } from "inversify";
import { Cell } from "../../../domain/entities/cell.domain";
import { SnakeRepository } from '../../../domain/repository/snake.repository';

@injectable()
export default class SnakeDatabase implements SnakeRepository{
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