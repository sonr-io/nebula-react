
import CalendarAdd from "../../../assets/duotone/CalendarAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CalendarAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CalendarAdd data-testid="CalendarAddIcon" className={classes} />
  );
}
