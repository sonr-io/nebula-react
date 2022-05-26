import { screen, render } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

// For webauthn we should import the mock and not the actual implementation.
// See __mocks__ for more info
jest.mock("@sonr-io/webauthn");
jest.mock('../../assets/GrayInverted.svg', () => 'gray-inverted');

/*
    NON Complete unit test example to test correct configuration of mocks and jest.
    Should be implemented completely in the following sprints.
    Some guidance on testing implementations

    - test for inital component 'truthy' should be defined once imported as a module ✅
    - test for function being invoked ✅
    - test for callbacks / custom behavior being invoked
    - test custom props being respected in each component
*/

beforeEach(() => {
  jest.resetModules();
});

test("Button should be defined", () => {
  expect(Button).toBeTruthy();
});

test("Button should be a function", () => {
  expect(typeof Button).toBe("function");
});

test("Button should be rendered with icon", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId, debug } = render(
    <Button
      label="Login"
      icon="gray-inverted"
      styling="inline-flex items-center px-4 py-2 text-white bg-primaryLight-500 rounded hover:bg-primaryLight-700"
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');

  expect(button.querySelector('gray-inverted')).toBeTruthy();
  expect(button.querySelector('span')).toHaveClass('pr-8');
  expect(screen.getByText("Login")).toBeTruthy();
});

test("Button should be rendered without icon", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId, container } = render(
    <Button
      label="Login"
      styling="inline-flex items-center px-4 py-2 text-white bg-primaryLight-500 rounded hover:bg-primaryLight-700"
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');

  expect(button.querySelector('gray-inverted')).toBeFalsy();
  expect(button.querySelector('span')).not.toHaveClass('pr-8');
  expect(screen.getByText("Login")).toBeTruthy();
});

// test Button Returns a Promise
test('Button Renders, Checks Styling to be String, Check if domain is null in component', () => {
  // eslint-disable-next-line no-alert
  render(<Button
    label="Login"
    styling="inline-flex items-center px-4 py-2 text-white bg-primaryLight-500 rounded hover:bg-primaryLight-700"
    onClick={() => alert('Login!')}
  />);
  expect(screen.getByText('Login')).toBeTruthy();
  expect(typeof screen.getByText('Login').getAttribute('class')).toBe('string');
  expect(screen.getByText('Login').getAttribute('domain')).toBe(null);
  expect(Button).toBeInstanceOf(Function);
});
