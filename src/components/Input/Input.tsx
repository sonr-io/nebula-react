import { InputProps } from "../../types/inputProps";

const cx = require('classnames');
const defaultClasses = 'py-2.5 px-3 h-10 w-full rounded border focus:text-gray-600 focus:outline-none';

export const Input: React.FC<InputProps> = ({ value, invalid, styling, ...rest }) => {
  const textClasses = value ? 'text-gray-400' : 'text-gray-300';
  const borderClasses = invalid ? 'border-red-300 focus:border-red-300' : 'border-gray-300 focus:border-gray-400';

  const classes = cx(
    defaultClasses,
    textClasses,
    borderClasses,
    styling
  );

  return (
    <input
      {...rest}
      value={value}
      className={classes}
      data-testid="nebula-input"
    />
  )
}
