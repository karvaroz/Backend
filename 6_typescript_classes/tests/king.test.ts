import Position from "../src/position";
import King from "../src/king";

describe("Test king", () => {
	let king = new King("White", "E", 1);

	it("should move one place forward", () => {
		let position = new Position("E", 2);
		expect(king.canMoveTo(position)).toBe(true); // Pasa la prueba
	});

	it("shouldn't move to the same place", () => {
		let position = new Position("E", 1);
		//  expect(king.canMove(position)).toBe(false);
		expect(king.canMoveTo(position)).toBe(false); // No pasa la prueba
	});

	it("should move one place to the left", () => {
		let position = new Position("D", 1);
		expect(king.canMoveTo(position)).toBe(true); // Pasa la prueba
	});

	it("shouldn't move forward more than 1 space", () => {
		let position = new Position("E", 3);
		expect(king.canMoveTo(position)).toBe(false); // Pasa la prueba
	});
});
