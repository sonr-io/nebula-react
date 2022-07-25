
import Mouse from "../../../assets/outline/Mouse.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MouseIcon({ className, dataTestid = "MouseIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Mouse data-testid={dataTestid} className={classes} {...rest} />
  );
}
