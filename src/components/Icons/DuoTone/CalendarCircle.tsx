
import CalendarCircle from "../../../assets/duotone/CalendarCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CalendarCircle} data-testid="CalendarCircleIcon" className={classes} />
  );
}
