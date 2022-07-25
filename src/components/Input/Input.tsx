import { FocusEvent, useCallback, useMemo, useState } from "react";
import { InputProps } from "../../types/inputProps";
import { NebulaIcon } from "../Icons";

const cx = require('classnames');
const defaultClasses = 'w-full bg-transparent rounded border py-2 opacity-50 placeholder-input-primary focus:placeholder-input-focused focus:outline-none focus:opacity-100 focus:text-input-focused';

export const Input: React.FC<InputProps> = ({ value, invalid, styling, iconName, iconType, clear, info, onBlur, ...rest }) => {
  const [focused, setFocused] = useState(false);

  const textClasses = useMemo(() => value ? 'text-input-focused' : 'text-input-primary', [value]);
  const iconClasses = useMemo(() => {
    const color = invalid ? 'fill-red-700' : 'fill-input-focused'
    return focused ? color : `fill-input-focused opacity-50`
  }, [invalid, focused]);
  const borderClasses = useMemo(
    () => invalid ? 'border-red-700 focus:border-red-700' : 'border-input-primary focus:border-input-focused',
    [invalid]
  );

  const classes = cx(
    defaultClasses,
    iconName ? 'pl-10' : 'pl-3',
    clear ? 'pr-10' : 'pr-3',
    info ? 'pr-10' : 'pr-3',
    textClasses,
    borderClasses,
    styling
  );

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setFocused(false);

    !!onBlur && onBlur(e);
  }, []);

  return (
    <label className="relative block w-full">
      <input
        {...rest}
        value={value}
        className={classes}
        data-testid="nebula-input"
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
      />
      {iconName && <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <NebulaIcon iconName={iconName} iconType={iconType} className={iconClasses} />
      </span>}
      {clear && <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <NebulaIcon dataTestid="CloseCircleIcon" iconName="CloseCircle" iconType="filled" className={iconClasses} />
      </span>}
      {info && !clear && <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <NebulaIcon dataTestid="InfoCircleIcon" iconName="InfoCircle" iconType="filled" className={iconClasses} />
      </span>}
    </label>
  )
}
