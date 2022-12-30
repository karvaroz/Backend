import { Column, ObjectIdColumn, Entity, ObjectID } from "typeorm";
import { Game } from "../../../domain/entities/game.domain";

@Entity()
export default class GameEntity implements Game {
	@ObjectIdColumn()
	id: ObjectID;

	@Column({ nullable: false, unique: true })
	gameId!: number;

	@Column({ nullable: false, unique: true })
	foodId!: number;

	@Column({ nullable: false, unique: true })
	playerId!: number;

	@Column({ nullable: false})
	gameStatus!: string;

	@Column({ nullable: false, unique: true })
	snakeId!: number;

	@Column({ nullable: false, unique: true })
	boardId!: number;
}
