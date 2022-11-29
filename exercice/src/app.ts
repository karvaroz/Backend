const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
	res.send("Hello World!");
});


// Apply - Incova la funcion y los argumentos se reciben en forma de lista

type User = {
	username: string;
	pass: string;
};

let users: Array<User> = [
	{
		username: "Pepe",
		pass: "pass123",
	},
];

function login(username: string, pass: string) {
	for (let i = 0; i < users.length; i++) {
		if (users[i].username === username && users[i].pass === pass) {
			return  "Usuario autenticado"
		} else if (users[i].username === username && users[i].pass !== pass) {
			return  "Contraseña incorrecta"
		} else if (users[i].username !== username && users[i].pass === pass) {
			 return "Verifica tu usuario"
		}
		return "Usuario no autenticado, intenta nuevamente o registrate"
	}
}

console.log(login.apply(null, ["Pepo", "pass123"]));

// Bind - crea una copia de la función

function register(username: string, pass: string) {
	users.push({ username, pass });
	return users
}

console.log(register.bind(null, "Juan", "hola123")());
// Bind
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

function howMuchforBike(id: number, hours: number) {
	return `Rentar la ${bikes[id].bike_model} por ${hours} horas, sería ${(
			bikes[id].bike_price_per_hour * hours
		).toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		})}
		`
	
}

console.log(howMuchforBike.bind(null, 1, 10)());

// Call - incova la funcion y los argumentos son pasados separados por coma
type Employee = {
	name: string;
	job: string;
	salary: number;
	hours: number;
};

let queue: Array<Employee> = [
	{
		name: "Mateo",
		job: "Pintor",
		salary: 15,
		hours: 48,
	},
	{
		name: "Julia",
		job: "Vendedora",
		salary: 15,
		hours: 40,
	},
];

function getSalary() {
	for (let i = 0; i < queue.length; i++) {
		console.log(`Empleado ${i + 1}: ${queue[i].name} ha trabajado ${
			queue[i].hours
		} horas, En base a su salario es de: ${(
			queue[i].salary * queue[i].hours
		).toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		})}
			`);
	}
}

getSalary.call(queue)
