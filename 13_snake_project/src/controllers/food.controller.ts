import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "../infrastructure/inversify/inversify.config";
import { FOODSERVICE } from "../infrastructure/inversify/types";
import { FoodService } from "../services/food.services";
import GenerateRandomNumber from "../services/utils/generateRandomNumber";

const generateNumber = new GenerateRandomNumber().randomNumber;

export class FoodController {
	foodCreationService = container.get<FoodService>(FOODSERVICE);

	async generateFood(req: Request, res: Response) {
		try {
			const food = {
				idFood: parseInt(req.body.idFood),
				positionX: generateNumber(parseInt(req.body.maxValuePositionX)),
				positionY: generateNumber(parseInt(req.body.maxValuePositionY)),
			};
			const newFood = await this.foodCreationService.generateFood(food);
			res.status(200).send(newFood);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getFoodById(req: Request, res: Response) {
		try {
			const foodId = parseInt(req.body.idFood)
			const getFood = await this.foodCreationService.getFoodById(foodId)
			res.status(200).send(getFood);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async deleteFood(req: Request, res: Response) {
		try {
			const foodId = parseInt(req.body.idFood);
			const foodToDelete = await this.foodCreationService.deleteFood(foodId);
			res.status(200).json(
				{
					message: `idFood ${foodToDelete.affected} deleted successfully`
				}
			);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
