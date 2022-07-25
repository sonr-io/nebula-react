
import LockCircle from "../../../assets/duotone/LockCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LockCircleIcon({ className, dataTestid = "LockCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LockCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
