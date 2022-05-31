import { Input } from "./";

beforeEach(() => {
  jest.resetModules();
});

test("Input should be defined", () => {
  expect(Input).toBeTruthy();
});

test("Input should be a function", () => {
  expect(typeof Input).toBe("function");
});
