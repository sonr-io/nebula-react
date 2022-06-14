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

test("LabelInput should be vertical", () => {
  const { input, queryByTestId } = setup({ label: 'label', vertical: true });

  expect(input).toHaveClass('pl-3');
})

test("LabelInput should be inline (default)", () => {
  const { input, queryByTestId } = setup({ label: 'label' });

  expect(input).toHaveClass('pl-3');
})
