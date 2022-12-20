import { injectable } from "inversify";
import { DeleteResult } from "typeorm";
import { Food } from "../../../domain/entities/food.domain";
import { FoodRepository } from "../../../domain/repository/food.repository";
import { AppDataSource } from "../app.dbsource";
import FoodEntity from "./food.entity";

@injectable()
export default class FoodDatabase implements FoodRepository {

	async generateFood(food: Food): Promise<Food> {
		const repository = AppDataSource.getRepository(FoodEntity);
		return await repository.save(food);
	}

	async getFoodById(idFood: number): Promise<Food | null> {
		const repository = AppDataSource.getRepository(FoodEntity);
		return await repository.findOneBy({ idFood });
	}

	async deleteFood(idFood: number): Promise<DeleteResult> {
		const repository = AppDataSource.getRepository(FoodEntity);
		return await repository.delete({ idFood });
	}
}
