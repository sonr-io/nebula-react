import { RegisterButtonProps } from "../types/registerButtonProps"
import { ReactComponent as Logo } from "./../assets/Gray_Inverted.svg";

export default function SignUpButton(RegisterButtonProps: RegisterButtonProps) {
  return (
    <div className="inline-flex items-center mx-auto pt-8">
        <button 
          className={RegisterButtonProps.styling}
          onClick={RegisterButtonProps.onClick}>
          <Logo className="w-8 h-8 mr-2" />
          <span className='text-md pr-8'>{RegisterButtonProps.label}</span>
        </button>
    </div>
  )
}