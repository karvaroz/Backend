import { DataSource } from "typeorm";
import BoardEntity from "./board/board.entity";
import PlayerEntity from "./player/player.entity";
import SnakeEntity from "./snake/snake.entity";


export const AppDataSource = new DataSource({
	type: "sqlite",
	database: "database.sqllite",
	synchronize: true,
	logging: false,
	entities: [BoardEntity, PlayerEntity, SnakeEntity],
	migrations: [],
	subscribers: [],
});

