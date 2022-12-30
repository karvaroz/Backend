import { Snake } from "../../../domain/entities/snake.domain";
import { Column, ObjectIdColumn, Entity, ObjectID } from "typeorm";

@Entity()
export default class SnakeEntity implements Snake {
	@ObjectIdColumn()
	id: ObjectID;

	@Column({ nullable: false, unique: true })
	snakeId!: number;

	@Column({ nullable: false })
	snakeLength!: number;

	@Column({ nullable: false })
	snakePositionX!: number;

	@Column({ nullable: false })
	snakePositionY!: number;

	@Column({ nullable: false })
	snakeDirection!: string;
}
