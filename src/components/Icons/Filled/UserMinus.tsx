
import UserMinus from "../../../assets/filled/UserMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserMinusIcon({ className, dataTestid = "UserMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UserMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
