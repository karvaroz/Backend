import { Food } from "../entities/food.domain";
import { IPosition } from "../interfaces/position";

export interface FoodRepository {
	generateFood(food: Food): Promise<Food>;
	getFoodById(idFood: number): Promise<Food | null>;
	updateFood(food: Food): Promise<Food>;
	deleteFood(idFood: number): Promise<boolean>;
	// generateRandom(boardSize: number): IPosition;
}
