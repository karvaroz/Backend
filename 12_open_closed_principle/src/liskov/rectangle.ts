export default class Rectangle {
	constructor(public lenght: number, public width: number) {}

	calculateArea(): number {
		return this.lenght * this.width;
	}
}
