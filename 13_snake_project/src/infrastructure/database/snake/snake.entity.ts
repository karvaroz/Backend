import { Snake } from "../../../domain/entities/snake.domain";
import { Column, PrimaryColumn, Entity } from "typeorm";
import { DirectionType } from "../../../domain/enums/directionType";
import { IPosition } from "../../../domain/interfaces/position";

@Entity()
export default class SnakeEntity implements Snake {
	@PrimaryColumn()
	snakeId!: number;

	@Column()
	snakeLength!: number;

	@Column()
	snakePosition!: IPosition;
	
	@Column()
	snakeDirection!: DirectionType;
}
