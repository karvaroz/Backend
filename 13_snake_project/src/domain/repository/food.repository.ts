import { Food } from "../entities/food.domain";

export interface FoodRepository {
	generateFood(food: Food): Promise<Food>;
	getFoodById(foodId: number): Promise<Food | null>;
	updateFood(food: Food): Promise<Food>;
	deleteFood(foodId: number): Promise<boolean>;
}
