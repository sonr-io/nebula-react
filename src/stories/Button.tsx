import { ButtonProps } from '../types/buttonProps';

export const Button = ({ label, styling, onClick }: ButtonProps) => {
  return (
    <button
      className={styling}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
