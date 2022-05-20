import { MouseEventHandler } from "react";
import {
  AuthenticationError,
  AuthenticationResult,
  LoginButtonProps,
} from "../../types/LoginButton/loginButtonProps";
import { SonrLogoWrapper } from "../Icons";

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
      <button
        id="login-button"
        type="button"
        className={props.styling}
        onClick={onClickWrapper(props.onLogin, props.onError)}
      >
        <SonrLogoWrapper />
        <span className="text-md pr-8">{props.label}</span>
      </button>
    </div>
  );
}
