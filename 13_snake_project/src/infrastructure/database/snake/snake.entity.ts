import { Snake } from "../../../domain/entities/snake.domain";
import { Column, PrimaryColumn, Entity } from "typeorm";

@Entity()
export default class SnakeEntity implements Snake {
	@PrimaryColumn()
	id!: number;

	@Column()
	length!: number;
	
	@Column()
	positionX!: number;
	
	@Column()
	positionY!: number;
}