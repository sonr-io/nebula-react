import { screen, render, fireEvent } from "@testing-library/react";
import { LoginButton } from "./";
import "@testing-library/jest-dom";

// For webauthn we should import the mock and not the actual implementation.
// See __mocks__ for more info
jest.mock('@sonr-io/webauthn');
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

test("LoginButton should be defined", () => {
  expect(LoginButton).toBeTruthy();
});

test("LoginButton should be a function", () => {
  expect(typeof LoginButton).toBe("function");
});

test("LoginButton should be rendered", () => {
  // eslint-disable-next-line no-alert
  render(
    <LoginButton
      domain="foo"
      label="Login"
      icon="gray-inverted"
      skin="primary"
      onLogin={jest.fn()}
      onError={jest.fn()}
    />
  );
  expect(screen.getByText("Login")).toBeTruthy();
});

// test LoginButton Returns a Promise
test('LoginButton Renders, Checks Styling to be String, Check if domain is null in component', () => {
  // eslint-disable-next-line no-alert
  render(<LoginButton
    domain="foo"
    label="Login"
    skin="primary"
    onLogin={jest.fn()}
    onError={jest.fn()}
  />);
  expect(screen.getByText('Login')).toBeTruthy();
  expect(typeof screen.getByText('Login').getAttribute('class')).toBe('string');
  expect(screen.getByText('Login').getAttribute('domain')).toBe(null);
  expect(LoginButton).toBeInstanceOf(Function);
});

test("LoginButton success callback function should be called", async () => {
  // eslint-disable-next-line no-alert
  const loginCallback = jest.fn();
  const errorCallback = jest.fn();

  const { getByTestId } = render(
    <LoginButton
      domain="foo"
      label="Login"
      icon="gray-inverted"
      skin="primary"
      onLogin={loginCallback}
      onError={errorCallback}
    />
  );
  const loginButton = getByTestId('nebula-button');
  fireEvent.click(loginButton);

  await Promise.resolve();
  expect(loginCallback).toBeCalledTimes(1);
  expect(errorCallback).not.toBeCalled();
});
