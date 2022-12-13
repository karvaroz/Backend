import { DataSource } from "typeorm";
import BoardEntity from "./board/board.entity";
import CellEntity from "./cell/cell.entity";
import SnakeEntity from "./snake/snake.entity";

export const AppDataSource = new DataSource({
	type: "sqlite",
	database: "database.sqllite",
	synchronize: true,
	logging: false,
	entities: [BoardEntity, CellEntity, SnakeEntity],
	migrations: [],
	subscribers: [],
});
