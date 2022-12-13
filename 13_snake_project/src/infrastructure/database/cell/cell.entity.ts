import { Column, PrimaryColumn, Entity } from "typeorm";
import { Cell } from "../../../domain/entities/cell.domain";
import { CellType } from "../../../domain/enums/cellType";

@Entity()
export default class CellEntity implements Cell {
	@PrimaryColumn()
	id!: number;

	@Column()
	row!: number;

	@Column()
	column!: number;

	@Column()
	cellType!: CellType;
}
