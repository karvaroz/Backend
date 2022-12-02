import { File, Rank } from "./types";

export default class Position {
	constructor(private file: File, private rank: Rank) {
	}
	// Calcular la postion
	getPiecePosition(position: Position) {
		return {
			// Devolver un valor absoluto para la posicion vertical
			rank: position.rank - this.rank,
			// Retornar un integer para la posicion horizontal
			// Obtener el Unicode del primer carácter de una cadena
			file: position.file.charCodeAt(0) - this.file.charCodeAt(0),
		};
	}
}
