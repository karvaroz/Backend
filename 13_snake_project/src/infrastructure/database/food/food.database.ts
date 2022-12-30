import { injectable } from "inversify";
import { Food } from "../../../domain/entities/food.domain";
import { FoodRepository } from "../../../domain/repository/food.repository";
import { AppDataSource } from "../app.dbsource";
import FoodEntity from "./food.entity";

@injectable()
export default class FoodDatabase implements FoodRepository {
	async generateFood(food: Food): Promise<Food> {
		const repository = AppDataSource.getMongoRepository(FoodEntity);
		return await repository.save(food);
	}

	async getFoodById(idFood: number): Promise<Food> {
		const repository = AppDataSource.getMongoRepository(FoodEntity);
		const result = await repository.findOne({
			where: {
				idFood: idFood,
			},
		});
		return result;
	}

	async deleteFood(idFood: number): Promise<Boolean> {
		const repository = AppDataSource.getMongoRepository(FoodEntity);
		if (await repository.delete({ idFood })) {
			return true;
		}
		return false;
	}

	async updateFood(food: Food): Promise<Food> {
		const repository = AppDataSource.getMongoRepository(FoodEntity);
		return await repository.save(food);
	}
}
