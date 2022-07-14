
import Calendar from "../../../assets/filled/Calendar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Calendar} data-testid="CalendarIcon" className={classes} />
  );
}
