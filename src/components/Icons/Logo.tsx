import Logo from "../../assets/GrayInverted.svg";

import { IconProps } from "../../types";

export function SonrLogoWrapper(_props: IconProps) {
  return (
    <img src={Logo} data-testid="logo-svg" className="w-10 h-10 mr-2" />
  );
}
