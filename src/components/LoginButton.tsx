import { loginButtonProps } from './../types/loginButtonProps';
import {ReactComponent as Logo } from "./../assets/Gray_Inverted.svg";
import { MouseEventHandler } from 'react';
import {startUserLogin} from '@sonr-io/webauthn/dist/main'

export default function LoginButton(loginButtonProps: loginButtonProps) {
  function onClickWrapper(callback: () => void): MouseEventHandler<HTMLButtonElement> {
    // Call webauthn module here.
    return (e: any) => {

      startUserLogin({
        name: loginButtonProps.domain,
        crossOrigin: false 
      }).then(() => {
        callback && callback();
      });
    }
  } 
  return (
    <div className="inline-flex items-center mx-auto pt-8">
        <button 
          className={loginButtonProps.styling}
          onClick={onClickWrapper(loginButtonProps.onLogin)}>
          <Logo className="w-8 h-8 mr-2" />
          <span className='text-md pr-8'>{loginButtonProps.label}</span>
        </button>
    </div>
  )
}