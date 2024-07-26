import getSolution from "./utils";

test("First test case X: 2, Y: 10, Z: 4", () => {
  expect(getSolution(2, 10, 4).toContain([2, 0], [0, 2], [2, 2], [0, 4]));
});

test("Second test case X: 2, Y: 100, Z: 96", () => {
  expect(getSolution(2, 10, 4).toContain([0, 100], [2, 98], [0, 98], [2, 96]));
});

test("Second test case X: 2, Y: 6, Z: 5", () => {
  expect(getSolution(2, 10, 4).toBe(false));
});
