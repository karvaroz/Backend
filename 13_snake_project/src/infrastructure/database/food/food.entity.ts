import { Column, ObjectIdColumn, Entity, ObjectID } from "typeorm";
import { Food } from "../../../domain/entities/food.domain";

@Entity()
export default class FoodEntity implements Food {
	@ObjectIdColumn()
	id: ObjectID;

	@Column({ nullable: false, unique: true })
	idFood!: number;

	@Column({ nullable: false })
	positionX!: number;

	@Column({ nullable: false })
	positionY!: number;
}