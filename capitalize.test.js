const capitalize = require("./capitalize");

it("Capitalization test", () => {
  expect(capitalize("hello world!")).toBe("Hello world!");
});
