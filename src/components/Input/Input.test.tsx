import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { Input } from "./";

import "@testing-library/jest-dom";
import { InputProps } from "../../types/inputProps";

jest.mock('../../assets/Close.svg', () => 'close-svg');
jest.mock('../../assets/Info.svg', () => 'info-svg');

function TestInput({ value, ...rest }: InputProps) {
  const [testValue, setValue] = useState(value || '');

  return <Input value={testValue} {...rest} onChange={e => act(() => setValue(e.target.value))} />
}

const setup = (props?: InputProps) => {
  const utils = render(<TestInput {...props} />)
  const input = utils.getByTestId('nebula-input');
  return {
    input,
    ...utils,
  }
}

beforeEach(() => {
  jest.resetModules();
});

test("Input should be defined", () => {
  expect(Input).toBeTruthy();
});

test("Input should be a function", () => {
  expect(typeof Input).toBe("function");
});

test("Input should render without an icon", () => {
  const { input, queryByTestId } = setup();
  const icon = queryByTestId('icon-svg');

  expect(icon).toBeFalsy();
  expect(input).toHaveClass('pl-3');
})

test("Input should render with icon-svg icon", () => {
  const { input, findByTestId } = setup({ icon: 'add' });
  const icon = findByTestId('icon-svg');

  expect(icon).toBeTruthy();
  expect(input).toHaveClass('pl-10');
})

test("Input should render with clear icon", () => {
  const { input, queryByTestId } = setup({ clear: true });
  const icon = queryByTestId('close-svg');

  expect(icon).toBeTruthy();
  expect(input).toHaveClass('pr-10');
})

test("Input should render with info icon", () => {
  const { input, queryByTestId } = setup({ info: true });
  const icon = queryByTestId('info-svg');

  expect(icon).toBeTruthy();
  expect(input).toHaveClass('pr-10');
})

test("Input should not render with info icon when clear icon is present", () => {
  const { input, queryByTestId } = setup({ info: true, clear: true });
  const infoIcon = queryByTestId('info-svg');
  const closeIcon = queryByTestId('close-svg');

  expect(infoIcon).toBeFalsy();
  expect(closeIcon).toBeTruthy();
  expect(input).toHaveClass('pr-10');
})

test("Input focus and blur", () => {
  const { input } = setup();

  input.focus();
  expect(document.activeElement).toEqual(input)
  input.blur();
  expect(document.activeElement).not.toEqual(input)
})

// ### VALID ###

test("Input should render valid with entry", () => {
  const { input } = setup();

  expect(input).not.toHaveClass('text-input-focused border-input-primary focus:border-input-focused');
  fireEvent.change(input, { target: { value: 'some value' } });
  expect(input).toHaveClass('text-input-focused border-input-primary focus:border-input-focused');
})

test("Input should render valid without entry", () => {
  const { input } = setup({ value: 'entry' });

  expect(input).toHaveClass('text-input-focused border-input-primary focus:border-input-focused');
  fireEvent.change(input, { target: { value: '' } });
  expect(input).not.toHaveClass('text-input-focused border-input-primary focus:border-input-focused');
})

// ### INVALID ###

test("Input should render invalid with entry", () => {
  const { input } = setup({ invalid: true });

  expect(input).not.toHaveClass('text-input-focused');
  expect(input).toHaveClass('border-red-300 focus:border-red-300');

  fireEvent.change(input, { target: { value: 'entry' } });

  expect(input).toHaveClass('text-input-focused');
  expect(input).toHaveClass('border-red-300 focus:border-red-300');
})

test("Input should render invalid without entry", () => {
  const { input } = setup({ value: 'entry', invalid: true });

  expect(input).toHaveClass('text-input-focused');
  expect(input).toHaveClass('border-red-300 focus:border-red-300');

  fireEvent.change(input, { target: { value: '' } });

  expect(input).not.toHaveClass('text-input-focused');
  expect(input).toHaveClass('border-red-300 focus:border-red-300');
})

test("Input should render invalid, selected, with entry", () => {
  const { input } = setup({ invalid: true });

  input.focus()
  expect(input).not.toHaveClass('text-input-focused');
  expect(input).toHaveClass('border-red-300 focus:border-red-300');

  fireEvent.change(input, { target: { value: 'entry' } });

  expect(input).toHaveClass('text-input-focused');
  expect(input).toHaveClass('border-red-300 focus:border-red-300');
})

test("Input should render invalid, selected, without entry", () => {
  const { input } = setup({ value: 'entry', invalid: true });

  input.focus()
  expect(input).toHaveClass('text-input-focused');
  expect(input).toHaveClass('border-red-300 focus:border-red-300');

  fireEvent.change(input, { target: { value: '' } });

  expect(input).not.toHaveClass('text-input-focused');
  expect(input).toHaveClass('border-red-300 focus:border-red-300');
})
