import { Snake } from "../../../domain/entities/snake.domain";
import { Column, PrimaryColumn, Entity } from "typeorm";

@Entity()
export default class SnakeEntity implements Snake {

	@PrimaryColumn()
	snakeId!: number;

	@Column()
	snakeLength!: number;

	@Column()
	snakePositionX!: number;

	@Column()
	snakePositionY!: number;

	@Column()
	snakeDirection!: string;
}
