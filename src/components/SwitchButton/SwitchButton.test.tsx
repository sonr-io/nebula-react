import { render, fireEvent } from "@testing-library/react";
import { SwitchButton } from "./";
import "@testing-library/jest-dom";

/*
    NON Complete unit test example to test correct configuration of mocks and jest.
    Should be implemented completely in the following sprints.
    Some guidance on testing implementations

    - test for inital component 'truthy' should be defined once imported as a module ✅
    - test for function being invoked ✅
    - test for callbacks / custom behavior being invoked
    - test custom props being respected in each component
*/

jest.mock('../../assets/filled/People.svg', () => 'people-svg');

beforeEach(() => {
  jest.resetModules();
});

test("SwitchButton should be defined", () => {
  expect(SwitchButton).toBeTruthy();
});

test("SwitchButton should be a function", () => {
  expect(typeof SwitchButton).toBe("function");
});

test("SwitchButton should be rendered with icon", () => {
  const { queryByTestId } = render(
    <SwitchButton
      icon="person"
      disabled
      onClick={jest.fn()}
    />
  );
  const personSVG = queryByTestId('PeopleIcon');
  expect(personSVG).toBeTruthy();
});

test("SwitchButton should be rendered as enabled", () => {
  const { getByTestId } = render(
    <SwitchButton
      icon="person"
      onClick={jest.fn()}
    />
  );
  const switchButton = getByTestId('nebula-switchbutton');
  expect(switchButton).not.toHaveClass('opacity-50');
});

test("SwitchButton should be rendered as disabled", () => {
  const { getByTestId } = render(
    <SwitchButton
      icon="person"
      disabled
      onClick={jest.fn()}
    />
  );
  const switchButton = getByTestId('nebula-switchbutton');
  expect(switchButton).toHaveClass('opacity-50');
});

test("SwitchButton should be rendered as On", () => {
  const { getByTestId } = render(
    <SwitchButton
      icon="person"
      initialValue={true}
      onClick={jest.fn()}
    />
  );
  const switchButton = getByTestId('nebula-switchbutton');
  const switchButtonContent = getByTestId('nebula-switchbutton-content');

  expect(switchButton).toHaveClass('bg-primary');
  expect(switchButton).not.toHaveClass('bg-gray-700');

  expect(switchButtonContent).toHaveClass('ml-6');
});

test("SwitchButton should be rendered as Off", () => {
  const { getByTestId } = render(
    <SwitchButton
      icon="person"
      initialValue={false}
      onClick={jest.fn()}
    />
  );
  const switchButton = getByTestId('nebula-switchbutton');
  const switchButtonContent = getByTestId('nebula-switchbutton-content');

  expect(switchButton).not.toHaveClass('bg-primary');
  expect(switchButton).toHaveClass('bg-gray-700');

  expect(switchButtonContent).not.toHaveClass('ml-6');
});

test("SwitchButton enabled should toggle value", () => {
  const initialValue = true;
  let value;

  const { getByTestId } = render(
    <SwitchButton
      icon="person"
      initialValue={initialValue}
      onClick={v => value = v}
    />
  );
  const switchButton = getByTestId('nebula-switchbutton');

  fireEvent.click(switchButton);
  expect(value).toBe(false);
});

test("SwitchButton disabled should not toggle value", () => {
  const initialValue = false;
  let value;

  const { getByTestId } = render(
    <SwitchButton
      icon="person"
      disabled
      initialValue={initialValue}
      onClick={v => value = v}
    />
  );
  const switchButton = getByTestId('nebula-switchbutton');

  fireEvent.click(switchButton);
  expect(value).not.toBe(initialValue);
  expect(value).toBeUndefined();
});
