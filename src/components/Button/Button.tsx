import cx from "classnames";

import { ButtonProps, ButtonSkin, ButtonSize } from "../../types/buttonProps";
import { SonrLogoWrapper } from "../Icons";

export const buttonSizes: { [key in ButtonSize]: string } = {
  lg: 'h-10',
  md: 'h-8',
  sm: 'h-6',
}

export const buttonSkins: { [key in ButtonSkin]: string } = {
  primary: 'text-skin-primary bg-skin-primary',
  secondary: 'border border-primary text-skin-secondary bg-skin-transparent',
  subtle: 'text-skin-subtle bg-skin-subtle bg-opacity-10',
  transparent: 'text-skin-secondary bg-skin-transparent'
}

export function Button({
  id,
  size = 'md',
  type = 'button',
  skin = 'primary',
  disabled = false,
  label,
  styling,
  icon,
  onClick }: ButtonProps) {
  const buttonClasses = cx(
    'inline-flex items-center rounded-md px-3',
    buttonSizes[size],
    buttonSkins[skin],
    { 'opacity-40': disabled },
    styling,
  );

  return (
    <div className="inline-flex items-center mx-auto">
      <button
        data-testid='nebula-button'
        id={id}
        type={type}
        className={buttonClasses}
        onClick={onClick}
      >
        {icon && <SonrLogoWrapper />}
        <span className='text-md'>{label}</span>
      </button>
    </div>
  );
}
