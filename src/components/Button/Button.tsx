import { ButtonProps, ButtonSkin, ButtonSize } from "../../types/buttonProps";

const cx = require('classnames');

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
  icon,
  onClick }: ButtonProps) {
  const buttonClasses = cx(
    'inline-flex items-center rounded-md px-3',
    buttonSizes[size],
    disabled ? mutedButtonSkins[skin] : buttonSkins[skin],
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
        <span className='text-md'>{label}</span>
      </button>
    </div>
  );
}
