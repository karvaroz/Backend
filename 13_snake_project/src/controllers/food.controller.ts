import { Request, Response } from "express";
import "reflect-metadata";

import { Food } from "../domain/entities/food.domain";
import { container } from "../infrastructure/inversify/inversify.config";

import { FOODSERVICE } from "../infrastructure/inversify/types";
import { FoodService } from "../services/food.services";

import GenerateRandomNumber from "../services/utils/generateRandomNumber";

export class FoodController {
	foodCreationService = container.get<FoodService>(FOODSERVICE);

	async generateFood(req: Request, res: Response) {
		try {
			const { idFood, maxValuePositionX, maxValuePositionY } = req.body;

			const generateNumber = new GenerateRandomNumber().randomNumber;
			const positionX = generateNumber(maxValuePositionX);
			const positionY = generateNumber(maxValuePositionY);
			const food: Food = {
				idFood: idFood,
				positionX: positionX,
				positionY: positionY,
			};

			const newFood = await this.foodCreationService.generateFood(food);
			res.status(200).send(newFood);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getFoodById(req: Request, res: Response) {
		try {
			const { idFood } = req.params;
			const food = await this.foodCreationService.getFoodById(parseInt(idFood));
			res.status(200).send(food);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async deleteFood(req: Request, res: Response) {
		try {
			const { idFood } = req.params;
			const foodDeleted = await this.foodCreationService.deleteFood(
				parseInt(idFood)
			);
			res.status(200).send(`ID: ${foodDeleted.affected} deleted successfully`);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
