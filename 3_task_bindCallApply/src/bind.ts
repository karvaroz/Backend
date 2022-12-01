// Bind - crea una copia de la función

import { users } from "./apply";

export function register(username: string, pass: string) {
	users.push({ username, pass });
	return users
}


type Bike = {
	bike_id: number;
	bike_model: string;
	bike_price_per_hour: number;
	bike_mileage: string;
	bike_RC: number;
};

let bikes: Array<Bike> = [
	{
		bike_id: 1,
		bike_model: "R15 X",
		bike_price_per_hour: 10,
		bike_mileage: "24km por galón",
		bike_RC: 4367209012,
	},
	{
		bike_id: 2,
		bike_model: "RS 200",
		bike_price_per_hour: 15,
		bike_mileage: "25km por galón",
		bike_RC: 436720666,
	},
	{
		bike_id: 3,
		bike_model: "HERO RX",
		bike_price_per_hour: 35,
		bike_mileage: "50km por galón",
		bike_RC: 436229012,
	},
];

export function howMuchforBike(id: number, hours: number) {
	return `Rentar la ${bikes[id].bike_model} por ${hours} horas, sería ${(
		bikes[id].bike_price_per_hour * hours
	).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	})}
 		`;
}

