import { AuthenticationError, AuthenticationResult, loginButtonProps } from '../../types/LoginButton/loginButtonProps';
import { SonrLogoWrapper } from './../Icons';
import { MouseEventHandler } from 'react';

const startUserLogin = require('@sonr-io/webauthn').startUserLogin;

export function LoginButton(props: loginButtonProps) {
  function onClickWrapper(callback: AuthenticationResult, errorCallback: AuthenticationError): MouseEventHandler<HTMLButtonElement> {
    return (e: any) => {
      startUserLogin({
        name: props.domain,
        crossOrigin: false,
        rpId: 'Sonr'
      }).then((result: boolean) => {
        callback && callback(result);
      }).catch((error: any) => {
        errorCallback && errorCallback(error);
      });
    }
  };

  return (
    <div className="inline-flex items-center mx-auto pt-8">
        <button
          id='login-button' 
          className={props.styling}
          onClick={onClickWrapper(props.onLogin, props.onError)}>
            {/* <SonrLogoWrapper/> */}
          <span className='text-md pr-8'>{props.label}</span>
        </button>
    </div>
  )
}