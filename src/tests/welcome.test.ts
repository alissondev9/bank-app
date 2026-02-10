import { welcome } from "../services/welcome";

describe("welcome function", () => {
  it("should return welcome message", () => {
    const result = welcome();
    expect(result).toBe("Bem-vindo ao Dio Bank!");
  });
});
