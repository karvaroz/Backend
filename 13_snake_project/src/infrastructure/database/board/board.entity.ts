import { Column, ObjectIdColumn, Entity, ObjectID } from "typeorm";
import { Board } from "../../../domain/entities/board.domain";

@Entity()
export default class BoardEntity implements Board {
	@ObjectIdColumn()
	id: ObjectID;

	@Column({ nullable: false, unique: true })
	boardId!: number;

	@Column({ nullable: false })
	boardSize!: number;
}
