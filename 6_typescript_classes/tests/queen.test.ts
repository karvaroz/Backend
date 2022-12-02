import Position from "../src/position";
import Queen from "../src/queen";

describe("Test queen", () => {
    let queen = new Queen("White", "D", 1);
    
	it("should move vertically", () => {
		let position = new Position("D", 8);
		expect(queen.canMoveTo(position)).toBe(true); // No paso la prueba
    });
    
	it("should move horizontally", () => {
		let position = new Position("A", 1);
		expect(queen.canMoveTo(position)).toBe(true); // No paso la prueba
	});
    
	it("should move diagonally", () => {
		let position = new Position("H", 5);
		expect(queen.canMoveTo(position)).toBe(true); // No paso la prueba

		position = new Position("A", 4);
		expect(queen.canMoveTo(position)).toBe(true);
	});
    
	it("should not move L", () => {
		let position = new Position("C", 3);
        expect(queen.canMoveTo(position)).toBe(false);
        
		position = new Position("E", 3);
		expect(queen.canMoveTo(position)).toBe(false);
    });
    
	it("should not move other places", () => {
		let position = new Position("C", 5);
        expect(queen.canMoveTo(position)).toBe(false);
        
		position = new Position("F", 8);
		expect(queen.canMoveTo(position)).toBe(false);
	});
});
