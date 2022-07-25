
import UserTick from "../../../assets/outline/UserTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserTickIcon({ className, dataTestid = "UserTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UserTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
