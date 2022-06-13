import { SyntheticEvent, useState } from "react";
import { RegisterFormProps } from "../../types/registerFormProps";
import { Button } from "../Button";
import { Input } from "../Input";

const { startUserRegistration } = require("@sonr-io/webauthn");

export function RegisterForm({ domain, onError, onRegister }: RegisterFormProps) {
  const [snr, setSnr] = useState(domain);

  function OnSubmitWrapper(event: SyntheticEvent) {
    event.preventDefault();
    const callback = onRegister;
    const errorCallback = onError;

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
            value={snr}
            onChange={e => setSnr(e.target.value)}
          />
          <Button
            label="Register"
            type="submit"
            skin="primary"
            onClick={OnSubmitWrapper}
          />
        </div>
      </form>
    </div>
  );
}
