import { DataSource } from "typeorm";

import BoardEntity from "./board/board.entity";
import FoodEntity from "./food/food.entity";
import GameEntity from "./game/game.entity";
import PlayerEntity from "./player/player.entity";
import SnakeEntity from "./snake/snake.entity";

export const AppDataSource = new DataSource({
	type: "sqlite",
	database: "database.sqllite",
	synchronize: true,
	logging: false,
	entities: [BoardEntity, PlayerEntity, SnakeEntity, SnakeBodyEntity,GameEntity, FoodEntity],
	migrations: [],
	subscribers: [],
});
