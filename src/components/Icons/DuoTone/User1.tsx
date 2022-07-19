
import User1 from "../../../assets/duotone/User1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function User1Icon({ className, dataTestid = "User1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <User1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
