import { File, Rank } from "./types";

export default class Position {
	constructor(private file: File, private rank: Rank) {
	}
	// Calcular la distancia entre una pieza y otra
	distanceFromOthers(position: Position) {
		return {
			// Devolver un valor absoluto para la posicion vertical
			rank: Math.abs(position.rank - this.rank),
			// Retornar un integer para la posicion horizontal
			file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
		}
	}
}
