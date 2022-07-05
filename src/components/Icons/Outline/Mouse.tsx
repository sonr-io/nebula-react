
import Mouse from "../../../assets/outline/Mouse.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MouseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Mouse data-testid="MouseIcon" className={classes} />
  );
}
