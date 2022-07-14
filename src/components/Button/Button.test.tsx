import { screen, render, fireEvent } from "@testing-library/react";
import { Button, buttonSizes, buttonSkins, mutedButtonSkins } from "./";
import { Filled } from "../Icons";
import "@testing-library/jest-dom";

// For webauthn we should import the mock and not the actual implementation.
// See __mocks__ for more info
jest.mock("@sonr-io/webauthn");
jest.mock("../../assets/filled/AddCircle.svg", () => "add-circle-svg")

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

test("Button should be rendered as primary (default)", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      size="sm"
      skin="primary"
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');
  expect(button).toHaveClass(buttonSkins.primary);
});

test("Button should be rendered as primary disabled", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      size="sm"
      skin="primary"
      disabled
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');
  expect(button).toHaveClass(mutedButtonSkins.primary);
});

test("Button should be rendered as secondary", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      size="sm"
      skin="secondary"
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');
  expect(button).toHaveClass(buttonSkins.secondary);
});

test("Button should be rendered as secondary disabled", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      size="sm"
      skin="secondary"
      disabled
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');
  expect(button).toHaveClass(mutedButtonSkins.secondary);
});

test("Button should be rendered as subtle", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      size="sm"
      skin="subtle"
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');
  expect(button).toHaveClass(buttonSkins.subtle);
});

test("Button should be rendered as subtle disabled", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      size="sm"
      skin="subtle"
      disabled
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');
  expect(button).toHaveClass(mutedButtonSkins.subtle);
});

test("Button should be rendered as transparent", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      size="sm"
      skin="transparent"
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');
  expect(button).toHaveClass(buttonSkins.transparent);
});

test("Button should be rendered as transparent disabled", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      size="sm"
      skin="transparent"
      disabled
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');
  expect(button).toHaveClass(mutedButtonSkins.transparent);
});

test("Button should be rendered large", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      size="lg"
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');

  expect(button).toHaveClass(buttonSizes.lg);
});

test("Button should be rendered medium (as default)", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');

  expect(button).toHaveClass(buttonSizes.md);
});

test("Button should be rendered small", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Button
      label="Login"
      Icon={Filled.AddCircleIcon}
      size="sm"
      onClick={() => alert("Login!")}
    />
  );
  const button = getByTestId('nebula-button');

  expect(button).toHaveClass(buttonSizes.sm);
});

test("Button should be rendered without icon", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId, container } = render(
    <Button
      label="Login"
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
    onClick={() => alert('Login!')}
  />);
  expect(screen.getByText('Login')).toBeTruthy();
  expect(typeof screen.getByText('Login').getAttribute('class')).toBe('string');
  expect(screen.getByText('Login').getAttribute('domain')).toBe(null);
  expect(Button).toBeInstanceOf(Function);
});

test("Button should call the callback function", () => {
  // eslint-disable-next-line no-alert
  const cbFunction = jest.fn();

  const { getByTestId } = render(<Button
    label="Login"
    onClick={cbFunction}
  />);


  const loginButton = getByTestId('nebula-button');
  fireEvent.click(loginButton);

  expect(cbFunction).toBeCalled();
});
