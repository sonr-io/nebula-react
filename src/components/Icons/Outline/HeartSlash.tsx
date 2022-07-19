
import HeartSlash from "../../../assets/outline/HeartSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartSlashIcon({ className, dataTestid = "HeartSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HeartSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
