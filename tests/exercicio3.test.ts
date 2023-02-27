import { User, userList } from "../src/exercicio3";

test("Astrodev está presente na lista de usuários", () => {
    const astrodev: User = { name: "Astrodev", age: 25 }
    expect(userList).toContainEqual(astrodev);
})