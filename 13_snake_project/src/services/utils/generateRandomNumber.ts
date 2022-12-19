export default class GenerateRandomNumber {
	randomNumber(maxNumber: number) {
		let counter: number = 1;
		let prevRand: number = 1;
		let time = new Date().getTime();
		let randNumber = (time / counter / (prevRand + 1)) % maxNumber;
		counter++;
		prevRand = randNumber;
		return randNumber;
	}
}
