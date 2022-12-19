import { Food } from "../../../domain/entities/food.domain";
import FoodEntity from "./food.entity";

export class foodMapper {
    static foodToEntity(food: FoodEntity) {
        const createFoodEntity: Food = new Food()
        createFoodEntity.idFood = food.idFood;
        createFoodEntity.positionX = food.positionX
        createFoodEntity.positionY = food.positionY
    }
}