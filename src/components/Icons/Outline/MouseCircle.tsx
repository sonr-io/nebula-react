
import MouseCircle from "../../../assets/outline/MouseCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MouseCircleIcon({ className, dataTestid = "MouseCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MouseCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
