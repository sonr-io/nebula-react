
import Buliding from "../../../assets/outline/Buliding.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BulidingIcon({ className, dataTestid = "BulidingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Buliding data-testid={dataTestid} className={classes} {...rest} />
  );
}
