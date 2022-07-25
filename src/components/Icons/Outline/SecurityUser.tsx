
import SecurityUser from "../../../assets/outline/SecurityUser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SecurityUserIcon({ className, dataTestid = "SecurityUserIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SecurityUser data-testid={dataTestid} className={classes} {...rest} />
  );
}
