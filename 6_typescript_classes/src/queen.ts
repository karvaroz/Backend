import Piece from "./piece";
import position from "./position";

export default class Queen extends Piece {
	canMoveTo(position: position): boolean {
		let distance = this.position.getPiecePosition(position);
		// Solo se puede mover dos espacios vertical y horizontal
		return distance.rank < 2 && distance.file < 2;
	}
}
