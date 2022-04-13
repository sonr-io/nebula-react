import { loginButtonProps } from './../types/loginButtonProps';
import { SonrLogoWrapper } from './Icons';
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
            <SonrLogoWrapper/>
          <span className='text-md pr-8'>{loginButtonProps.label}</span>
        </button>
    </div>
  )
}