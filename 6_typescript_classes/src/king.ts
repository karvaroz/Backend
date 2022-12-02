import Piece from "./piece";
import Position from "./position";


export default class King extends Piece {
	canMoveTo(position: Position): boolean {
		let distance = this.position.getPiecePosition(position);
		
		if (
			distance.file == position.getPiecePosition(position).file &&
			distance.rank == position.getPiecePosition(position).rank
		) {
			return false;
		}

		return distance.rank < 2 && distance.file < 2;
	}
}
