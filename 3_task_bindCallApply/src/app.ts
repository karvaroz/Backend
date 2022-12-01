import { login } from "./apply";
import { howMuchforBike, register } from "./bind";
import { getSalary, queue } from "./call";

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

console.log(login.apply(null, ["Pepo", "pass123"]));

console.log(register.bind(null, "Juan", "hola123")());

console.log(howMuchforBike.bind(null, 1, 10)());


console.log(getSalary.call(queue));