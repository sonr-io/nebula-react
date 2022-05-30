import { SyntheticEvent, useState } from "react";
import { RegisterFormProps } from "../../types/registerFormProps";
import { Button } from "../Button";

const startUserRegistration =
  require("@sonr-io/webauthn").startUserAuthentication;

export function RegisterForm(registerFormProps: RegisterFormProps) {
  const [snr, setSnr] = useState("");

  function OnSubmitWrapper(event: SyntheticEvent) {
    event.preventDefault();
    const callback = registerFormProps.onRegister;
    const errorCallback = registerFormProps.onError;

    const target = event.target as typeof event.target & {
      SNR: { value: string };
    };

    const snrValue = target.SNR.value;
    setSnr(snrValue);

    startUserRegistration({
      name: snr,
      crossOrigin: false,
      rpId: "Sonr",
    })
      .then((result: boolean) => {
        callback && callback(result);
      })
      .catch((error: any) => {
        errorCallback && errorCallback(error);
      });
  }

  return (
    <div>
      <form
        data-testid="registerForm"
        onSubmit={OnSubmitWrapper}
        className="w-full max-w-md mx-auto"
      >
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
            placeholder="SNR"
            defaultValue={registerFormProps.domain}
          />
          <Button
            label="Register"
            type="submit"
            styling="
              bg-primary
              hover:bg-primary-dark
              text-sm
              text-skin-primary
              py-1
              px-2
              rounded"
          />
        </div>
      </form>
    </div>
  );
}
