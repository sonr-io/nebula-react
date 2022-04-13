import { loginButtonProps } from './loginButtonProps';
import { ReactComponent as Logo } from "./../assets/Gray_Inverted.svg";
import { MouseEventHandler } from 'react';

export function LoginButton(loginButtonProps: loginButtonProps) {
  function onClickWrapper(callback: () => void): MouseEventHandler<HTMLButtonElement> {
    return (e: any) => {
      callback && callback();
    }
  } 
  return (
    <div className="inline-flex items-center mx-auto pt-8">
        <button 
          className={loginButtonProps.styling}
          onClick={onClickWrapper(loginButtonProps.onLogin)}>
          <Logo className="w-10 h-10 mr-2" />
          <span className='text-md pr-8'>{loginButtonProps.label}</span>
        </button>
    </div>
  )
}