export class ResponseMsg<T> {
	public readonly responseCode: number;
	public readonly message: string;
	public readonly data?: T;

	constructor(responseCode: number, message: string, data?: T) {
		this.responseCode = responseCode;
		this.message = message;
		this.data = data;
	}
}
