import { Column, PrimaryColumn, Entity } from "typeorm";
import { SnakeBody } from "../../../domain/entities/snakebody.domain";

@Entity()
export default class SnakeBodyEntity implements SnakeBody {
	@PrimaryColumn()
	snakeBodyId!: number;

	@Column()
	snakeId!: number;

	@Column()
	snakeX: number;

	@Column()
	snakeY: number;

	@Column()
	snakeBodyPositionX!: number;

	@Column()
	snakeBodyPositionY!: number;
}
