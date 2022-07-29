import { useMemo } from "react";
import { ButtonProps, ButtonSkin, ButtonSize } from "../../types/buttonProps";
import { NebulaIcon } from "../Icons";

const cx = require('classnames');

export const buttonIconSizes: { [key in ButtonSize]: string } = {
  lg: 'w-7 h-7',
  md: 'w-6 h-6',
  sm: 'w-5 h-5',
}

export const buttonSizes: { [key in ButtonSize]: string } = {
  lg: 'h-12',
  md: 'h-10',
  sm: 'h-8',
}

export const buttonSkins: { [key in ButtonSkin]: string } = {
  primary: 'text-skin-primary bg-skin-primary',
  secondary: 'border border-primary text-skin-secondary bg-skin-transparent',
  subtle: 'text-skin-subtle bg-skin-subtle bg-opacity-10',
  transparent: 'text-skin-secondary bg-skin-transparent'
}

export const mutedButtonSkins: { [key in ButtonSkin]: string } = {
  primary: 'text-skin-primary-muted bg-skin-primary-muted',
  secondary: 'border border-primary-muted text-skin-secondary-muted bg-skin-transparent-muted',
  subtle: 'text-skin-subtle-muted bg-skin-subtle-muted bg-opacity-10',
  transparent: 'text-skin-secondary-muted bg-skin-transparent-muted'
}

export function Button({
  id,
  size = 'md',
  type = 'button',
  skin = 'primary',
  disabled = false,
  label,
  styling,
  iconName,
  iconType,
  onClick }: ButtonProps) {
  const buttonClasses = cx(
    'flex items-center rounded-md px-2',
    buttonSizes[size],
    disabled ? mutedButtonSkins[skin] : buttonSkins[skin],
    { 'opacity-40': disabled },
    styling,
  );

  const iconClasses = useMemo(() => cx(buttonIconSizes[size], 'fill-current'), [size]);
  const textClasses = useMemo(() => cx({ 'ml-2': !!iconName }, 'text-md'), [iconName]);

  return (
    <button
      data-testid='nebula-button'
      id={id}
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      {iconName && <span><NebulaIcon iconName={iconName} iconType={iconType} className={iconClasses} /></span>}
      {label && <span className={textClasses}>{label}</span>}
    </button>
  );
}
