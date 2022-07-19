
import Login1 from "../../../assets/outline/Login1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Login1Icon({ className, dataTestid = "Login1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Login1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
