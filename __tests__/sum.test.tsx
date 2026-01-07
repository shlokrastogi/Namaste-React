import { sum } from "../src/components/sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 5);

  //Assertion
  expect(result).toBe(8);
});
