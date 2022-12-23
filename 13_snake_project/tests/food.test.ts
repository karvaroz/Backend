import "reflect-metadata";
import { container } from "../src/infrastructure/inversify/inversify.config";
import { FoodService } from "../src/services/food.services";
import { FOODSERVICE } from "../src/infrastructure/inversify/types";
import { Food } from "../src/domain/entities/food.domain";
import { AppDataSource } from "../src/infrastructure/database/app.dbsource";
import { UpdateResult } from "typeorm";

describe("FOOD SERVICE", () => {
	const foodService = container.get<FoodService>(FOODSERVICE);

	let foodTest: Food;

	beforeAll(async () => {
		await AppDataSource.initialize();
		foodTest = await foodService.generateFood(new Food(1, 2, 3));
	});


	it("SHOULD CREATE AN FOOD ENTITY", async () => {
		const foodTest = await foodService
			.generateFood(new Food(1, 2, 3))
			.then(async (res) => {
				expect(res instanceof Food).toBeTruthy();
			});
	});

	it("SHOULD FIND AN ENTITY FOOD BY ID", async () => {
		await foodService.getFoodById(foodTest.idFood)
			.then(async (res) => {
			expect(res.idFood).toEqual(foodTest.idFood);
		});
	});

	it("SHOULD FIND AN ENTITY FOOD BY ID", async () => {
		await foodService
			.updateFood(foodTest.idFood, foodTest)
			.then(async (res) => {
				expect(res).toBeInstanceOf(UpdateResult);
			});
	});
});
