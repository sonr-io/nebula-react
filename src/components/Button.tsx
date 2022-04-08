import { ButtonProps } from '../types/buttonProps';

export default function Button(ButtonProps: ButtonProps) {
  return (
    <div className="mx-auto pt-8">
        <button 
          className={ButtonProps.styling}
          onClick={ButtonProps.onClick}>
            {ButtonProps.label}
        </button>
    </div>
  )
}