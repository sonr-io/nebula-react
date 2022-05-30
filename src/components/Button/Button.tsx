import cx from "classnames";

import { ButtonProps, ButtonSizes } from "../../types/buttonProps";
import { SonrLogoWrapper } from "../Icons";

const buttonSizes: {[key in ButtonSizes]: string} = {
  lg: 'h-10',
  md: 'h-8',
  sm: 'h-6',
}

export function Button({ id, type = 'button', size = 'md', label, styling, icon, onClick }: ButtonProps) {
  const spanClasses = cx('text-md');
  const buttonClasses = cx('inline-flex items-center rounded-md px-3', styling, buttonSizes[size]);

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
        <span className={spanClasses}>{label}</span>
      </button>
    </div>
  );
}
