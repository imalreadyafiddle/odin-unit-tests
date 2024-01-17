import calculator from "./calculator";

it("Addition test", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

it("Subtraction test", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

it("Multiplication test", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

it("Division test", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
