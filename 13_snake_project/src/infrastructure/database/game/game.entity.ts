import { Column, PrimaryColumn, Entity } from "typeorm";
import { Game } from "../../../domain/entities/game.domain";

@Entity()
export default class GameEntity implements Game {
	@PrimaryColumn()
	id!: number;

	@Column()
	snakeId!: number;

	@Column()
	boardId!: number;
}
