
import UserTag from "../../../assets/filled/UserTag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserTagIcon({ className, dataTestid = "UserTagIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UserTag data-testid={dataTestid} className={classes} {...rest} />
  );
}
