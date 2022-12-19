import { Column, PrimaryColumn, Entity } from "typeorm";
import { Food } from "../../../domain/entities/food.domain";
import { IPosition } from "../../../domain/interfaces/position";

@Entity()
export default class FoodEntity implements Food {
	@PrimaryColumn()
	idFood!: number;

	@Column()
	positionX!: number;

	@Column()
	positionY!: number;
}