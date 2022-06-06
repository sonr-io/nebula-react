import { SyntheticEvent, useState } from "react";
import { RegisterFormProps } from "../../types/registerFormProps";
import { Button } from "../Button";
import { Input } from "../Input";

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
          <Input
            id="SNR"
            type="text"
            placeholder="SNR"
            defaultValue={registerFormProps.domain}
          />
          <Button
            label="Register"
            type="submit"
            skin="primary"
          />
        </div>
      </form>
    </div>
  );
}
