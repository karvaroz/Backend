import { injectable } from "inversify";
import { Food } from "../../../domain/entities/food.domain";
import { FoodRepository } from '../../../domain/repository/food.repository';

@injectable()
export default class FoodDatabase implements FoodRepository{
    generateFood(food: Food): Promise<Food> {
        throw new Error("Method not implemented.");
    }
    getFoodById(foodId: number): Promise<Food | null> {
        throw new Error("Method not implemented.");
    }
    updateFood(food: Food): Promise<Food> {
        throw new Error("Method not implemented.");
    }
    deleteFood(foodId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}