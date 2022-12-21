import { Column, PrimaryColumn, Entity } from "typeorm";
import { Board } from "../../../domain/entities/board.domain";

@Entity()
export default class BoardEntity implements Board {
	@PrimaryColumn()
	boardId!: number;

	@Column()
	boardSize!: number;
}
