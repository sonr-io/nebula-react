
import CalendarCircle from "../../../assets/outline/CalendarCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CalendarCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CalendarCircle data-testid="CalendarCircleIcon" className={classes} />
  );
}
