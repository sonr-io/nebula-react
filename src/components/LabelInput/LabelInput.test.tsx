import { useState } from "react";
import { render } from "@testing-library/react";
import { LabelInput } from "./";

import "@testing-library/jest-dom";
import { LabelInputProps } from "../../types/inputProps";

function TestInput({ value, ...rest }: LabelInputProps) {
  const [testValue, setValue] = useState(value || '');

  return <LabelInput value={testValue} {...rest} onChange={e => setValue(e.target.value)} />
}

const setup = (props: LabelInputProps) => {
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

test("LabelInput should be defined", () => {
  expect(LabelInput).toBeTruthy();
});

test("LabelInput should be a function", () => {
  expect(typeof LabelInput).toBe("function");
});

test("LabelInput should be vertical with caption", () => {
  const { input, queryByTestId } = setup({ label: 'label', caption: 'caption', vertical: true });
  const caption = queryByTestId('nebula-input-caption');

  expect(input).toHaveClass('pl-3');
  expect(caption).toHaveTextContent('caption');
})

test("LabelInput should be vertical without caption", () => {
  const { input, queryByTestId } = setup({ label: 'label', vertical: true });
  const caption = queryByTestId('nebula-input-caption');

  expect(input).toHaveClass('pl-3');
  expect(caption).toBeFalsy();
})

test("LabelInput should be vertical with label", () => {
  const { input, queryByTestId } = setup({ label: 'label', vertical: true });
  const label = queryByTestId('nebula-input-label');

  expect(input).toHaveClass('pl-3');
  expect(label).toHaveTextContent('label');
})

test("LabelInput should be vertical without label", () => {
  const { input, queryByTestId } = setup({ caption: 'caption', vertical: true });
  const label = queryByTestId('nebula-input-label');

  expect(input).toHaveClass('pl-3');
  expect(label).toBeFalsy();
})

test("LabelInput should be inline with caption", () => {
  const { input, queryByTestId } = setup({ label: 'label', caption: 'caption' });
  const caption = queryByTestId('nebula-input-caption');

  expect(input).toHaveClass('pl-3');
  expect(caption).toHaveTextContent('caption');
})

test("LabelInput should be inline without caption", () => {
  const { input, queryByTestId } = setup({ label: 'label' });
  const caption = queryByTestId('nebula-input-caption');

  expect(input).toHaveClass('pl-3');
  expect(caption).toBeFalsy();
})

test("LabelInput should be inline with label", () => {
  const { input, queryByTestId } = setup({ label: 'label' });
  const label = queryByTestId('nebula-input-label');

  expect(input).toHaveClass('pl-3');
  expect(label).toHaveTextContent('label');
})

test("LabelInput should be inline without label", () => {
  const { input, queryByTestId } = setup({});
  const label = queryByTestId('nebula-input-label');

  expect(input).toHaveClass('pl-3');
  expect(label).toBeFalsy();
})
