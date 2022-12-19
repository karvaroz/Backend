import { Game } from "../../../domain/entities/game.domain";
import GameEntity from "./game.entity";

export class gameMapper {
    static gameToEntity(game: GameEntity) {
        const createGameEntity: Game = new Game()
        createGameEntity.gameId = game.gameId
        createGameEntity.boardId = game.boardId
        createGameEntity.foodId = game.foodId
        createGameEntity.gameStatus = game.gameStatus
        createGameEntity.playerId = game.playerId
        createGameEntity.snakeId = game.snakeId
        return createGameEntity
    }
}