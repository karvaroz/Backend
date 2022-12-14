import { Column, PrimaryColumn, Entity } from "typeorm";
import { Board } from "../../../domain/entities/board.domain";

@Entity()
export default class BoardEntity implements Board {
	@PrimaryColumn()
	id!: number;

	@Column()
	width!: number;

	@Column()
	height!: number;
}
