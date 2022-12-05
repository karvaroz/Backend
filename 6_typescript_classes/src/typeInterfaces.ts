type sushiType1 = {
	calories: number;
	salty: boolean;
	tasty: boolean;
};

interface sushiInterface1 {
	calories: number;
	salty: boolean;
	tasty: boolean;
}
//   Herencia con tipos
//   Padre
type FoodType1 = {
	calories: number;
	salty: boolean;
};

//   Subtipos
type sushi = FoodType1 & {
	tasty: boolean;
};

type Cake1 = FoodType1 & {
	sweet: boolean;
};


// Herencia de tipos en interface
interface Food {
	calories: number;
	tasty: boolean;
}
//  Subtipo de interface
interface Sushi extends Food {
	salty: boolean;
}
interface Cake extends Food {
	sweet: boolean;
}

// Diferencias
// Las interfaces es dificil la union de tipos
interface AB {
	good(x: number): string;
	bad(x: number): string;
}
// La herencia de las interfaces no se puede hacer cambios en los metodos
// Verifica que sea asignable
// interface BA extends AB {
// 	good(x: number): string;
// 	bad(x: string): string;
// }

// implements y extends?
// Extends cuando se tiene dos cosas y vas a heredar todo a su hijo
// Implments - implementa los metodos
// diferencia entre interface y una clase abstracta?
// No se puede hacer herencia multiple con cosas abstractas
// default methos en TS?
