import Rectangle from "./rectangle";

export default class Square extends Rectangle {
	constructor(public width: number) {
		super(width, width);
	}

	calculateArea(): number {
		return this.width * this.width;
	}
}
