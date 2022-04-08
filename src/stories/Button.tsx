interface ButtonProps {
  label: string;
  styling: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={props.styling}
      {...props}
    >
      {label}
    </button>
  );
};
