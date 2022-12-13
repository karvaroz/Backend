
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
	type: "sqlite",
	database: "database.sqllite",
	synchronize: true,
	logging: false,
	// entities: [],
	migrations: [],
	subscribers: [],
});
