import React, { SyntheticEvent, useState } from 'react';
import { RegisterFormProps } from '../../types/registerFormProps';

const startUserRegistration = require('@sonr-io/webauthn').startUserAuthentication;

export function RegisterForm(props: RegisterFormProps) {
  const [snr, setSnr] = useState('');

  function OnSubmitWrapper(event: SyntheticEvent) {
    event.preventDefault();
    const callback = props.onRegister;
    const errorCallback = props.onError;

    const target = event.target as typeof event.target & {
      SNR: { value: string };
    };

    const snrValue = target.SNR.value;
    setSnr(snrValue);

    startUserRegistration({
      name: snr,
      crossOrigin: false,
      rpId: 'Sonr',
    }).then((result: boolean) => {
      callback && callback(result);
    }).catch((error: any) => {
      errorCallback && errorCallback(error);
    });
  }

  return (
    <div>
      <form data-testid="registerForm" onSubmit={OnSubmitWrapper} className="w-full max-w-md mx-auto">
        <div className="flex items-center border-b border-primaryLight-500 py-2">
          <input
            className="
              appearance-nonebg-transparent
              border-none
              w-full
              text-gray-700
              mr-3
              py-1
              px-2
              leading-tight
              focus:outline-none"
            id="SNR"
            type="text"
            defaultValue="SNR"
            placeholder="SNR"
            value={props.domain}
          />
          <button
            className="
              flex-shrink-0
              bg-primaryLight-500
              hover:bg-primaryLight-700
              border-primaryLight-500
              hover:border-primaryLight-700
              text-sm
              border-4
              text-white
              py-1
              px-2
              rounded"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
