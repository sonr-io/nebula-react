
import UserSquare from "../../../assets/duotone/UserSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserSquareIcon({ className, dataTestid = "UserSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UserSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
