import GenerateRandomNumber from "../src/services/utils/generateRandomNumber";


describe("RANDOM NUMBER GENERATOR", () => {

    it("SHOULD GENERATE RANDOM NUMBER",  () => {
        const generator = new GenerateRandomNumber().randomNumber(10);
        expect(generator).toBeLessThanOrEqual(10)
    })
})


