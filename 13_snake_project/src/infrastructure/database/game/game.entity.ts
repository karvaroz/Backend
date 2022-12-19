import { Column, PrimaryColumn, Entity } from "typeorm";
import { Game } from "../../../domain/entities/game.domain";
import { IStatus } from "../../../domain/interfaces/status";

@Entity()
export default class GameEntity implements Game {
	@PrimaryColumn()
	gameId!: number;

	@Column()
	foodId!: number;

	@Column()
	playerId!: number;

	@Column()
	gameStatus!: IStatus;

	@Column()
	snakeId!: number;
	
	@Column()
	boardId!: number;
}
