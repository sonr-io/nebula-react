
import CalendarEdit from "../../../assets/filled/CalendarEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CalendarEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CalendarEdit data-testid="CalendarEditIcon" className={classes} />
  );
}
