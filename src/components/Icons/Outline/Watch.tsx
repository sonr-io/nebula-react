
import Watch from "../../../assets/outline/Watch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WatchIcon({ className, dataTestid = "WatchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Watch data-testid={dataTestid} className={classes} {...rest} />
  );
}
