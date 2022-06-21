import { ChangeEvent, SyntheticEvent, useCallback, useState } from "react";
import { RegisterFormProps } from "../../types/registerFormProps";
import { Button } from "../Button";
import { Input } from "../Input";

const { startUserRegistration } = require("@sonr-io/webauthn");
const { ValidateUserName } = require("@sonr-io/validation/dist/index");

export function RegisterForm({ domain, onError, onRegister }: RegisterFormProps) {
  const [snr, setSnr] = useState(domain);
  const [invalidUserName, setInvalidUserName] = useState(false);

  function OnSubmitWrapper(event: SyntheticEvent) {
    event.preventDefault();
    if (process.env.ENV_NAME === 'STORYBOOK') return;

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

  const handleDomainChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSnr(value);
  }, [setSnr]);

  const handleBlur = useCallback(() => {
    const isUserNameValid = ValidateUserName(snr);

    if (isUserNameValid instanceof Error) {
      setInvalidUserName(true);
    }
  }, [snr]);

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
            invalid={invalidUserName}
            onChange={handleDomainChange}
            onBlur={handleBlur}
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
