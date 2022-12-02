const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// Extends para extender una clase
// Clase concreta - Todas las que estas implementando una interfaz
// Clases abstracta
// Los metodos puedenser private, protected, public
// super hace referencia a una clase padre

