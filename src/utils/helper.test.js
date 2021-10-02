import { customMultiply, randomColor } from "./helper";
import "@testing-library/jest-dom";

//Pure Function Testing

test("should properly multiply this value", () => {
  //Assert
  expect(customMultiply(3, 7)).toBe(21);
  expect(customMultiply(2, 12)).toBe(24);
});

test("should get properly color", () => {
  //Assert
  expect(randomColor()).toMatch(/^#[0-9a-f]{6}/);
});
