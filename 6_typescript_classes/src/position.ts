import { File, Rank } from "./types";

export default class Position {
	constructor(private file: File, private rank: Rank) {}

	getPiecePosition(position: Position) {
		return {
			rank: position.rank - this.rank,
			file: position.file.charCodeAt(0) - this.file.charCodeAt(0),
		};
	}
}
