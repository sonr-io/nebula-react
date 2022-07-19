
import UserOctagon from "../../../assets/outline/UserOctagon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserOctagonIcon({ className, dataTestid = "UserOctagonIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UserOctagon data-testid={dataTestid} className={classes} {...rest} />
  );
}
