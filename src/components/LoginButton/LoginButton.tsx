import { MouseEventHandler } from "react";
import {
  AuthenticationError,
  AuthenticationResult,
  LoginButtonProps,
} from "../../types/loginButtonProps";
import { Button } from "../Button";

const { startUserLogin } = require("@sonr-io/webauthn");

export function LoginButton(props: LoginButtonProps) {
  function onClickWrapper(
    callback: AuthenticationResult,
    errorCallback: AuthenticationError
  ): MouseEventHandler<HTMLButtonElement> {
    return (_e: any) => {
      startUserLogin({
        name: props.domain,
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
        id="login-button"
        label={props.label}
        styling={props.styling}
        onClick={onClickWrapper(props.onLogin, props.onError)}
      />
    </div>
  );
}
