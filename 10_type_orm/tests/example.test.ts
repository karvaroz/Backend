import sum from "../src/calc";

describe("Test sum function", () => {
	it("should return 15 for sum(10, 5)", () => {
		expect(sum(10, 5)).toBe(15);
	});
	it("should return 5 for sum(2, 3)", () => {
		expect(sum(2, 3)).toBe(5);
	});
	it("should return 5 for sum(2, 3)", () => {
		expect(sum(2, 3)).toBe(8);
	});
});
