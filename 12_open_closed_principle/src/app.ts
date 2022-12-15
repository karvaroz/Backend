// import NotificationByWhats from "./openclosed/notificationByWhats";
// import User from "./openclosed/user";

// const user = new User("test");

// let notByWp = new NotificationByWhats();
// notByWp.notifyByText(user, "test")


// import Rectangle from "./liskov/rectangle";
// import Square from "./liskov/square";

// const rectangle = new Rectangle(10, 5);
// const rectangle1: Rectangle = new Square(10);

// console.log(rectangle1.calculateArea());
// console.log(rectangle.calculateArea());
// test(rectangle);

// function test(shape: Rectangle): void {
// 	shape.width = 5;
// 	shape.lenght = 4;

// 	if (rectangle.calculateArea() != 20) {
// 		console.log("BAD AREA");
// 	}
// }

// Un tipo padre puede estar en el lado de la declaracion y contener a su hijo
// Poliformismo estatico
// Tipo base y un subtipo deben funcionar

// Heuristicos - formas de darse cuenta cuando se incumple
// 1. Funcion degenerativo
// 2. Funcion que elimina funcionalidad de la clase padre ya no se cumple
// 3. No Tipos especificos en el lado de la declaracion
// Se declaran los genericos y se instancian especificos

// Interface Segregation Principle
// No interfaces que hagan todo
// Si queremos interfaces concretas que hagan algo especificos
// Los clientes no deben ser forzados
