import { AuthenticationError, AuthenticationResult, RegisterButtonProps } from '../../types/registerButtonProps';
import { SonrLogoWrapper } from '../Icons';
import { MouseEventHandler } from 'react';

const startUserRegistration = require('@sonr-io/webauthn').startUserLogin;

export function RegisterButton(registerButtonProps: RegisterButtonProps) {
  function onClickWrapper(callback: AuthenticationResult, errorCallback: AuthenticationError): MouseEventHandler<HTMLButtonElement> {
    return (e: any) => {
      startUserRegistration({
        name: registerButtonProps.domain,
        crossOrigin: false,
        rpId: 'Sonr'
      }).then((result: boolean) => {
        callback && callback(result);
      }).catch((error: any) => {
        errorCallback && errorCallback(error);
      });
    }
  }

  return (
    <div className="inline-flex items-center mx-auto pt-8">
        <button 
          className={registerButtonProps.styling}
          onClick={onClickWrapper(registerButtonProps.onRegister, registerButtonProps.onError)}
        >
          <SonrLogoWrapper/>
          <span className='text-md pr-8'>{registerButtonProps.label}</span>
        </button>
    </div>
  )
};