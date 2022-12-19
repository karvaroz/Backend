export default class GenerateRandomNumber {
	randomNumber(maxNumber: number) {
		if (maxNumber <= 0) {
			maxNumber = 10;
		}
		let counter: number = 1;
		let prevRandom: number = 1;
		let getTimeNow = new Date().getTime();
		let randomValue = (getTimeNow / counter / prevRandom) % maxNumber;
		counter++;
		prevRandom = randomValue;
		return randomValue;
	}
}
