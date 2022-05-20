import { screen, render } from "@testing-library/react";
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
      styling="inline-flex items-center px-4 py-2 text-white bg-primaryLight-500 rounded hover:bg-primaryLight-700"
      onRegister={() => alert("Register!")}
      onError={function (_error: any): void {}}
      domain="foo"
    />
  );
  expect(screen.getByText("Register")).toBeTruthy();
});
