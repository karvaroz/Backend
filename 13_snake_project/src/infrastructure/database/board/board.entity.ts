import { Column, PrimaryColumn, Entity } from "typeorm";
import { Board } from "../../../domain/entities/board.domain";
import { Cell } from "../../../domain/entities/cell.domain";

@Entity()
export default class BoardEntity implements Board {
	@PrimaryColumn()
    id!: number;
    
	@Column()
	row_count!: number;

	@Column()
	col_count!: number;

	// @Column()
	// cells!: Cell[][];
}
