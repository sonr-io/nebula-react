import { MouseEventHandler } from "react";
import {
  AuthenticationError,
  AuthenticationResult,
  RegisterButtonProps,
} from "../../types/registerButtonProps";
import { Button } from "../Button";

const { startUserRegistration } = require("@sonr-io/webauthn");

export function RegisterButton(registerButtonProps: RegisterButtonProps) {
  function onClickWrapper(
    callback: AuthenticationResult,
    errorCallback: AuthenticationError
  ): MouseEventHandler<HTMLButtonElement> {
    return (_e: any) => {
      if (process.env.ENV_NAME === 'STORYBOOK') return;

      startUserRegistration({
        name: registerButtonProps.domain,
        crossOrigin: false,
        rpId: "Sonr",
      })
        .then((result: boolean) => {
          callback && callback(result);
        })
        .catch((error: any) => {
          errorCallback && errorCallback(error);
        });
    };
  }

  return (
    <div className="inline-flex items-center mx-auto pt-8">
      <Button
        size={registerButtonProps.size}
        icon={registerButtonProps.icon}
        label={registerButtonProps.label}
        skin={registerButtonProps.skin}
        styling={registerButtonProps.styling}
        onClick={onClickWrapper(
          registerButtonProps.onRegister,
          registerButtonProps.onError
        )}
      />
    </div>
  );
}
