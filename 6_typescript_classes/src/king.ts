import Piece from "./piece";
import position from "./position";

export default class King extends Piece {
	canMoveTo(position: position): boolean {
		let distance = this.position.getPiecePosition(position);
		return distance.rank <= 2 && distance.file <= 2;
	}
}
