import { useState } from "react";
import { InputProps } from "../../types/inputProps";

const cx = require('classnames');
const defaultClasses = 'py-2.5 px-3 h-10 w-full rounded border border-gray-300 focus:text-gray-600 focus:outline-none';

export const Input: React.FC<InputProps> = (props) => {
  const [hasError, setHasError] = useState(false);

  const textClasses = props?.value ? 'text-gray-400' : 'text-gray-300';

  const classes = cx(
    defaultClasses,
    textClasses,
    `focus:${hasError ? 'border-red-300' : 'border-gray-400'}`,
    props.styling
  );

  return (
    <input
      {...props}
      value={props?.value}
      className={classes}
      data-testid="nebula-input"
    />
  )
}
