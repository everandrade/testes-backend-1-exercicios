import { exercicio1 } from "../src/exercicio1"

describe("Alterar string para number", () => {
    test("", () => {
        const result = exercicio1("452")
        const expectedResult = typeof result === "number"
        expect(expectedResult).toBeTruthy()
    })
})