import { useMemo, useState } from "react";
import { InputProps } from "../../types/inputProps";
import { PersonIcon } from "../Icons";

const cx = require('classnames');
const defaultClasses = 'w-full bg-transparent rounded border py-2 opacity-50 focus:outline-none focus:opacity-100 focus:text-gray-600';

export const Input: React.FC<InputProps> = ({ value, invalid, styling, icon, clear, info, ...rest }) => {
  const [focused, setFocused] = useState(false);

  const iconClasses = useMemo(() => {
    const color = invalid ? 'fill-red-300' : 'fill-gray-400'
    return (focused ? color : `fill-gray-400`).concat(' opacity-1')
  }, [invalid, focused]);
  const textClasses = value ? 'text-gray-400' : 'text-gray-300';
  const borderClasses = invalid ? 'border-red-300 focus:border-red-300' : 'border-gray-300 focus:border-gray-400';

  const classes = cx(
    defaultClasses,
    icon ? 'pl-10' : 'pl-3',
    clear ? 'pr-10' : 'pr-3',
    info ? 'pr-10' : 'pr-3',
    textClasses,
    borderClasses,
    styling
  );

  return (
    <label className="relative block">
      <input
        {...rest}
        value={value}
        className={classes}
        data-testid="nebula-input"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <PersonIcon className={iconClasses} />
      </span>}
      {clear && <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <PersonIcon className={iconClasses} />
      </span>}
      {info && <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <PersonIcon className={iconClasses} />
      </span>}
    </label>
  )
}
