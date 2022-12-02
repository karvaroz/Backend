import Piece from "./piece";
import Position from "./position";

export default class Queen extends Piece {
	canMoveTo(position: Position): boolean {
		let distance = this.position.getPiecePosition(position);
		if (
			position.getPiecePosition(position).file == distance.file ||
			position.getPiecePosition(position).rank == distance.rank ||
			Math.abs(position.getPiecePosition(position).file - distance.file) ==
				Math.abs(position.getPiecePosition(position).rank - distance.rank)
		) {
			return true;
		}

		return false
	}
}
