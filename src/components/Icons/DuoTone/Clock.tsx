
import Clock from "../../../assets/duotone/Clock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ClockIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Clock data-testid="ClockIcon" className={classes} />
  );
}
