import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import { RegisterForm } from './';

// For webauthn we should import the mock and not the actual implementation.
// See __mocks__ for more info
jest.mock('@sonr-io/webauthn');

/*
    NON Complete unit test example to test correct configuration of mocks and jest.
    Should be implemented completely in the following sprints.
    Some guidance on testing implementations

    - test for inital component 'truthy' should be defined once imported as a module ✅
    - test for callbacks / custom behavior being invoked
    - test custom props being respected in each component
*/

const BASE_ENV = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...BASE_ENV };
});

afterAll(() => {
  process.env = BASE_ENV;
});

test('Register Form should be defined', () => {
  expect(RegisterForm).toBeTruthy();
});

test('Register Form should be a function', () => {
  expect(typeof RegisterForm).toBe('function');
});

test('Register Form should be rendered', () => {
  render(<RegisterForm domain="foo" onRegister={jest.fn()} onError={jest.fn()} />);
  expect(screen.getByText('Register')).toBeTruthy();
});

test('Register Form Renders, Checks Styling to be String, Check if domain is null in component', () => {
  render(<RegisterForm domain="foo" onRegister={jest.fn()} onError={jest.fn()} />);
  expect(screen.getByText('Register')).toBeTruthy();
  expect(screen.getByText('Register').getAttribute('domain')).toBe(null);
  expect(RegisterForm).toBeInstanceOf(Function);
});

test("RegisterForm input changes should be tracked", async () => {
  const { getByTestId } = render(
    <RegisterForm
      domain="foo"
      onRegister={jest.fn()}
      onError={jest.fn()}
    />
  );
  const registerInput = getByTestId('nebula-input');
  fireEvent.change(registerInput, { target: { value: 'changed' } })

  expect(registerInput).toHaveValue('changed');
});

test("RegisterForm input blur with valid snr UserName", async () => {
  const { getByTestId } = render(
    <RegisterForm
      domain="valid"
      onRegister={jest.fn()}
      onError={jest.fn()}
    />
  );
  const registerInput = getByTestId('nebula-input');
  fireEvent.change(registerInput, { target: { value: 'valid' } });
  registerInput.focus();

  expect(document.activeElement).toEqual(registerInput)
  registerInput.blur();
  expect(document.activeElement).not.toEqual(registerInput)

  expect(registerInput).not.toHaveClass('border-red-700');
});

test("RegisterForm input blur with invalid snr UserName", async () => {
  const { getByTestId } = render(
    <RegisterForm
      domain="invalid.snr"
      onRegister={jest.fn()}
      onError={jest.fn()}
    />
  );
  const registerInput = getByTestId('nebula-input');
  registerInput.focus();

  fireEvent.change(registerInput, { target: { value: 'invalid.snr' } });

  expect(document.activeElement).toEqual(registerInput)
  registerInput.blur();
  expect(document.activeElement).not.toEqual(registerInput)

  expect(registerInput).toHaveClass('border-red-700');
});

test("RegisterForm success callback function should be called", async () => {
  // eslint-disable-next-line no-alert
  const registerCallback = jest.fn();
  const errorCallback = jest.fn();

  const { getByTestId } = render(
    <RegisterForm
      domain="foo"
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

test('Testing with ENV_NAME = STORYBOOK env variable', async () => {
  process.env.ENV_NAME = 'STORYBOOK';

  const registerCallback = jest.fn();
  const errorCallback = jest.fn();

  const { getByTestId } = render(
    <RegisterForm
      domain="foo"
      onRegister={registerCallback}
      onError={errorCallback}
    />
  );
  const registerButton = getByTestId('nebula-button');
  fireEvent.click(registerButton);

  await Promise.resolve();
  expect(registerCallback).not.toBeCalled();
  expect(errorCallback).not.toBeCalled();
});
