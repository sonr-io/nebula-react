import { ButtonProps } from "../../types/buttonProps";
import { SonrLogoWrapper } from "../Icons";

export function Button({ id, type = 'button', label, styling, icon, onClick }: ButtonProps) {
  const classes = `text-md ${!!icon ? 'pr-8' : ''}`;

  return (
    <div className="inline-flex items-center mx-auto">
      <button
        data-testid='nebula-button'
        id={id}
        type={type}
        className={styling}
        onClick={onClick}
      >
        {icon && <SonrLogoWrapper />}
        <span className={classes}>{label}</span>
      </button>
    </div>
  );
}
