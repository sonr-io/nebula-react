
import Calendar from "../../../assets/outline/Calendar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CalendarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Calendar data-testid="CalendarIcon" className={classes} />
  );
}
