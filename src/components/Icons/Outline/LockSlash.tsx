
import LockSlash from "../../../assets/outline/LockSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LockSlashIcon({ className, dataTestid = "LockSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LockSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
