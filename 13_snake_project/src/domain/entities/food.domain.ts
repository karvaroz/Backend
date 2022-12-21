export class Food {
	idFood!: number;
	positionX!: number;
	positionY!: number;

	constructor(idFood: number, positionX: number, positionY: number) {
		this.idFood = idFood;
		this.positionX = positionX;
		this.positionY = positionY;
	}
}
