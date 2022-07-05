
import CalendarTick from "../../../assets/outline/CalendarTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CalendarTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CalendarTick data-testid="CalendarTickIcon" className={classes} />
  );
}
