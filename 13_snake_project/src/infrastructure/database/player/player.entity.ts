import { Column, ObjectIdColumn, Entity, ObjectID } from "typeorm";
import { Player } from "../../../domain/entities/player.domain";

@Entity()
export default class PlayerEntity implements Player {
	@ObjectIdColumn()
	id: ObjectID;

	@Column({ nullable: false, unique: true })
	playerId!: number;

	@Column({ nullable: false })
	name!: string;

	@Column({ nullable: false })
	score!: number;
}
