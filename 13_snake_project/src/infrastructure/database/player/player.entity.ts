import { Column, PrimaryColumn, Entity } from "typeorm";
import { Player } from "../../../domain/entities/player.domain";

@Entity()
export default class PlayerEntity implements Player {
	@PrimaryColumn()
	id!: number;

	@Column()
	name!: string;

	@Column()
	score!: number;

}
