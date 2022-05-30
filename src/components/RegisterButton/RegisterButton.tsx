import { MouseEventHandler } from "react";
import {
  AuthenticationError,
  AuthenticationResult,
  RegisterButtonProps,
} from "../../types/registerButtonProps";
import { Button } from "../Button";

const startUserRegistration =
  require("@sonr-io/webauthn").startUserAuthentication;

export function RegisterButton(registerButtonProps: RegisterButtonProps) {
  function onClickWrapper(
    callback: AuthenticationResult,
    errorCallback: AuthenticationError
  ): MouseEventHandler<HTMLButtonElement> {
    return (_e: any) => {
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
        label={registerButtonProps.label}
        styling={registerButtonProps.styling}
        onClick={onClickWrapper(
          registerButtonProps.onRegister,
          registerButtonProps.onError
        )}
      />
    </div>
  );
}
