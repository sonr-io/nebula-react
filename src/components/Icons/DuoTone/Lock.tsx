
import Lock from "../../../assets/duotone/Lock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LockIcon({ className, dataTestid = "LockIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Lock data-testid={dataTestid} className={classes} {...rest} />
  );
}
