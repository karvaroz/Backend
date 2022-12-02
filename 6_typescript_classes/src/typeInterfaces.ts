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
