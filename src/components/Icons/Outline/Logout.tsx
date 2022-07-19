
import Logout from "../../../assets/outline/Logout.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LogoutIcon({ className, dataTestid = "LogoutIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Logout data-testid={dataTestid} className={classes} {...rest} />
  );
}
