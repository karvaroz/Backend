import { DataSource } from "typeorm";

import BoardEntity from "./board/board.entity";
import FoodEntity from "./food/food.entity";
import GameEntity from "./game/game.entity";
import PlayerEntity from "./player/player.entity";
import SnakeEntity from "./snake/snake.entity";

export const AppDataSource = new DataSource({
	type: "mongodb",
	host: "127.0.0.1",
	port: 27017,
	database: "snakeDB",
	synchronize: true,
	logging: false,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	entities: [BoardEntity, PlayerEntity, SnakeEntity, GameEntity, FoodEntity],
	migrations: [],
	subscribers: [],
});
