import { Avatar } from './';

beforeEach(() => {
  jest.resetModules();
});

test("Avatar should be defined", () => {
  expect(Avatar).toBeTruthy();
});

test("Avatar should be a function", () => {
  expect(typeof Avatar).toBe("function");
});
