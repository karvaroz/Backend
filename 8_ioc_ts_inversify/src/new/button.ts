import Device from "./device";

export default class Button {
	constructor(public lamp: Device) {}

	onButtonListener(status: boolean): void {}
}
