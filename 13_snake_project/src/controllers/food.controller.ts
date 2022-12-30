import { Request, Response } from "express";
import "reflect-metadata";
import { Food } from "../domain/entities/food.domain";
import { container } from "../infrastructure/inversify/inversify.config";
import { FOODSERVICE } from "../infrastructure/inversify/types";
import { FoodService } from "../services/food.services";

import GenerateRandomNumber from "../services/utils/generateRandomNumber";
const generateNumber = new GenerateRandomNumber().randomNumber;

export class FoodController {
	foodCreationService = container.get<FoodService>(FOODSERVICE);

	async generateFood(req: Request, res: Response) {
		try {
			const { idFood, maxValuePositionX, maxValuePositionY } = req.body;
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
			res.status(200).send(foodDeleted);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async updateFood(req: Request, res: Response) {
		try {
			const { idFood } = req.params;
			const food = await this.foodCreationService.getFoodById(parseInt(idFood));
			food.positionX = generateNumber(req.body.maxValuePositionX);
			food.positionY = generateNumber(req.body.maxValuePositionY);
			await this.foodCreationService.generateFood(food);
			res.status(200).send(food);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}
