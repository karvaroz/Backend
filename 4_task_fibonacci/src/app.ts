const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

function* generatorFib(): IterableIterator<number> {
	let x = 0;
	let y = 1;
	while (true) {
		yield x;
		[x, y] = [y, x + y];
	}
}

const fibonacci = generatorFib();
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
