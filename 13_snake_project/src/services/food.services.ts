import { inject, injectable } from "inversify";
import { Food } from "../domain/entities/food.domain";
import { FoodRepository } from "../domain/repository/food.repository";
import { FOOD } from "../infrastructure/inversify/types";

@injectable()
export class FoodService {
	private foodRepository: FoodRepository;

	constructor(@inject(FOOD) foodRepository: FoodRepository) {
		this.foodRepository = foodRepository;
	}

	async generateFood(food: Food) {
		return await this.foodRepository.generateFood(food);
	}

	async getFoodById(idFood: number) {
		return await this.foodRepository.getFoodById(idFood);
	}

	async deleteFood(idFood: number) {
		return await this.foodRepository.deleteFood(idFood);
	}

	async updateFood(food: Food) {
		return await this.foodRepository.updateFood(food);
	}
}
