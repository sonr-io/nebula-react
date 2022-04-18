import React, { SyntheticEvent, useState } from 'react'
import { registerFormProps } from '../../types/registerFormProps';
import { RegisterButtonProps } from '../../types/registerButtonProps';
const startUserAuthentication = require('@sonr-io/webauthn').startUserAuthentication;

export function RegisterForm(props: registerFormProps, buttonProps: RegisterButtonProps) {
  const [snr, setSnr] = useState('');

  function OnSubmitWrapper(event: SyntheticEvent) {
      event.preventDefault();
      const callback = buttonProps.onRegister;
      const errorCallback = buttonProps.onError;

      const target = event.target as typeof event.target & {
          SNR: { value: string };
      }
      
      const snr = target.SNR.value;
      setSnr(snr);

      startUserAuthentication({
        name: snr,
        crossOrigin: false,
        rpId: 'Sonr'
      }).then((result: boolean) => {
        callback && callback(result);
      }).catch((error: any) => {
        errorCallback && errorCallback(error);
      });
  }

  return (
    <div>
        <form onSubmit={OnSubmitWrapper} className='w-full max-w-md mx-auto'>
            <div className='flex items-center border-b border-primaryLight-500 py-2'>
                <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' id='SNR' type='text' placeholder='SNR' value={props.domain}/>
                <button className='flex-shrink-0 bg-primaryLight-500 hover:bg-primaryLight-700 border-primaryLight-500 hover:border-primaryLight-700 text-sm border-4 text-white py-1 px-2 rounded' type='submit'>
                    Register
                </button>
            </div>
        </form>
    </div>
  )
};
