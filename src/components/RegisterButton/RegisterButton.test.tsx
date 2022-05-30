import { screen, render, fireEvent } from "@testing-library/react";
import { RegisterButton } from "./RegisterButton";
import "@testing-library/jest-dom";

// For webauthn we should import the mock and not the actual implementation.
// See mocks for more info
jest.mock("@sonr-io/webauthn");

/*
    NON Complete unit test example to test correct configuration of mocks and jest.
    Should be implemented completely in the following sprints.
    Some guidance on testing implementations

    - test for inital component 'truthy' should be defined once imported as a module ✅
    - test for callbacks / custom behavior being invoked
    - test custom props being respected in each component
*/

beforeEach(() => {
  jest.resetModules();
});

test("RegisterButton should be defined", () => {
  expect(RegisterButton).toBeTruthy();
});

test("RegisterButton should be a function", () => {
  expect(typeof RegisterButton).toBe("function");
});

test("RegisterButton should be rendered", () => {
  render(
    <RegisterButton
      label="Register"
      skin="primary"
      onRegister={jest.fn()}
      onError={jest.fn()}
      domain="foo"
    />
  );
  expect(screen.getByText("Register")).toBeTruthy();
});

test("RegisterButton success callback function should be called", async () => {
  // eslint-disable-next-line no-alert
  const registerCallback = jest.fn();
  const errorCallback = jest.fn();

  const { getByTestId } = render(
    <RegisterButton
      domain="foo"
      label="Login"
      skin="primary"
      onRegister={registerCallback}
      onError={errorCallback}
    />
  );
  const registerButton = getByTestId('nebula-button');
  fireEvent.click(registerButton);

  await Promise.resolve();
  expect(registerCallback).toBeCalledTimes(1);
  expect(errorCallback).not.toBeCalled();
});
