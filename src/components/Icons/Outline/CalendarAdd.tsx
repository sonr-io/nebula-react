
import CalendarAdd from "../../../assets/outline/CalendarAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CalendarAdd} data-testid="CalendarAddIcon" className={classes} />
  );
}
