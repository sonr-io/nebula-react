import { ButtonProps } from "../../types/buttonProps";

export function Button({ label, styling, icon, onClick }: ButtonProps) {
  const classes = `text-md ${!!icon ? 'pr-8' : ''}`;

  return (
    <div className="inline-flex items-center mx-auto pt-8">
      <button
        id="button"
        type="button"
        className={styling}
        onClick={onClick}
      >
        <span className={classes}>{label}</span>
      </button>
    </div>
  );
}
