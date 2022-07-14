
import Mouse from "../../../assets/duotone/Mouse.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MouseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Mouse data-testid="MouseIcon" className={classes} />
  );
}
