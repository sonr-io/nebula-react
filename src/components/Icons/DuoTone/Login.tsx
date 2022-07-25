
import Login from "../../../assets/duotone/Login.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LoginIcon({ className, dataTestid = "LoginIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Login data-testid={dataTestid} className={classes} {...rest} />
  );
}
