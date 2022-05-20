import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { RegisterForm } from './RegisterForm';

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

beforeEach(() => {
  jest.resetModules();
});

test('Register Form should be defined', () => {
  expect(RegisterForm).toBeTruthy();
});

test('Register Form should be a function', () => {
  expect(typeof RegisterForm).toBe('function');
});

test('Register Form should be rendered', () => {
  render(<RegisterForm domain="foo" onRegister={() => alert('Register!')} onError={function (_error: any): void { }} />);
  expect(screen.getByText('Register')).toBeTruthy();
});

test('Register Form Renders, Checks Styling to be String, Check if domain is null in component', () => {
  render(<RegisterForm domain="foo" onRegister={() => alert('Register!')} onError={function (_error: any): void { }} />);
  expect(screen.getByText('Register')).toBeTruthy();
  expect(screen.getByText('Register').getAttribute('domain')).toBe(null);
  expect(RegisterForm).toBeInstanceOf(Function);
});
