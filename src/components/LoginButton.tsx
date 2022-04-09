import { loginButtonProps } from '../types/loginButtonProps';
import {ReactComponent as Logo } from "../assets/Gray_Inverted.svg";

export default function LoginButton(loginButtonProps: loginButtonProps) {
  return (
    <div className="inline-flex items-center mx-auto pt-8">
        <button 
          className={loginButtonProps.styling}
          onClick={loginButtonProps.onClick}>
          <Logo className="w-8 h-8 mr-2" />
          <span className='text-md pr-8'>{loginButtonProps.label}</span>
        </button>
    </div>
  )
}