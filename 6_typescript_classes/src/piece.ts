import Position from "./position";
import { Color, File, Rank } from "./types";

export default abstract class Piece {
	protected position: Position;
	// Cada pieza tiene un color u una position inicial
	constructor(
		private readonly color: Color,
		private file: File,
		private rank: Rank
	) {
		this.position = new Position(file, rank);
	}
	moveTo(position: Position) {
		this.position = position;
	}

	abstract canMoveTo(position: Position): boolean;
}
// Private las propiedades solo se acceden dentro de la clase
// Readonly ayuda a que no se cambie el color
// Abstract significa que la clase no se puede instanciar
// Metodo abstract no tiene implementacion
// Las hijas son las que creen la instancia
// Todas las piezas hijas podrán moverse

// public
// Se puede acceder desde cualquier parte
// protected
// Accesible dentro de la clase y sus subclases
// private
// Accessible desde la clase solamente