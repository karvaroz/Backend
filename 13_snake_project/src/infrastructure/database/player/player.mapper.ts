import PlayerEntity from "./player.entity";
import { Player } from "../../../domain/entities/player.domain"

export class PlayerMapper {
    static playerToEntity(player: PlayerEntity){
        const createPlayerEntity: Player = new Player()
        createPlayerEntity.playerId = player.playerId
        createPlayerEntity.name = player.name
        createPlayerEntity.score = player.score
        return createPlayerEntity
    }
}