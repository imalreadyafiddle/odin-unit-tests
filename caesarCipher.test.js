const caesarCipher = require("./caesarCipher");

it("works with single letters", () => {
  expect(caesarCipher("G", 1)).toBe("H");
});

it("works with words", () => {
  expect(caesarCipher("Fcjjm", 2)).toBe("Hello");
});

it("works with phrases with punctuation", () => {
  expect(caesarCipher("Czggj, rjmgy!", 5)).toBe("Hello, world!");
});

it("works with negative shift factors", () => {
  expect(caesarCipher("Jgnnq", -2)).toBe("Hello");
});

it("works when shifting past the end of the alphabet", () => {
  expect(caesarCipher("Hzcwo", 15)).toBe("World");
});
