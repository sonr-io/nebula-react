
import UserRemove from "../../../assets/duotone/UserRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserRemoveIcon({ className, dataTestid = "UserRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UserRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
