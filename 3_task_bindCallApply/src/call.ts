// Call - incova la funcion y los argumentos son pasados separados por coma

type Employee = {
	name: string;
	job: string;
	salary: number;
	hours: number;
};

export let queue: Array<Employee> = [
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

export function getSalary() {
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
