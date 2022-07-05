
import CalendarRemove from "../../../assets/duotone/CalendarRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CalendarRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CalendarRemove data-testid="CalendarRemoveIcon" className={classes} />
  );
}
