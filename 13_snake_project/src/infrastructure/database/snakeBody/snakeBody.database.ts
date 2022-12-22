import { injectable } from "inversify";
import { UpdateResult, DeleteResult } from "typeorm";
import { SnakeBody } from "../../../domain/entities/snakebody.domain";
import { SnakeBodyRepository } from "../../../domain/repository/snakebody.repository";

@injectable()
export default class SnakeBodyDatabase implements SnakeBodyRepository {
    createSnakeFullBody(snakeId: number, snakeBody: SnakeBody): Promise<SnakeBody> {
        throw new Error("Method not implemented.");
    }

    getSnakeBodyById(snakeId: number): Promise<SnakeBody[]> {
        throw new Error("Method not implemented.");
    }

    updateSnakeBody(snakeId: number, snakeBody: SnakeBody): Promise<UpdateResult> {
        throw new Error("Method not implemented.");
    }
    
    deleteSnakeBody(snakeId: number): Promise<DeleteResult> {
        throw new Error("Method not implemented.");
    }
    
}