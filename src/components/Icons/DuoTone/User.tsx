
import User from "../../../assets/duotone/User.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserIcon({ className, dataTestid = "UserIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <User data-testid={dataTestid} className={classes} {...rest} />
  );
}
