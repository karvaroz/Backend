import King from "./king";
import Queen from "./queen";
export default class Game {
	private pieces = Game.makePieces();

	private static makePieces() {
		let king = new King("White", "E", 1);
		let queen = new Queen("White", "D", 1);
		return [king, queen];
	}
}
