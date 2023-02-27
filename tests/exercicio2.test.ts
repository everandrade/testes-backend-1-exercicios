import { exercicio2 } from "../src/exercicio2"

describe("Alterar 'aaaa/mm/dd' e retorna outra string no formato 'dd/mm/aaaa'", () => {
    test("", () => {
        const date = exercicio2("2023/02/27")
        const expectedResult = "27/02/2023"
        expect(date).toEqual(expectedResult)
    })
})