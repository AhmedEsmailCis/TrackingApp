const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Check for ticks.", () => {
  expect("tics").toMatch(/tic/);
});

test("U is not in here.", () => {
  expect("here").not.toMatch(/u/);
});
