export default class GenerateRandomNumber {
	randomNumber(maxNumber: number) { // Determinar el maximo numero
		let counter: number = 1;
		let prevRand: number = 1;
		let time = new Date().getTime(); // Nos da el numero de milisegundos actuales
		let randNumber: number = ((time / counter ) / (prevRand + 10)) % maxNumber; 
        // +1 nunca sera cero - entre counter para que sea decimal, % divido entre el numero maximo
		counter++;
		prevRand = randNumber;
		return randNumber
	}
}
