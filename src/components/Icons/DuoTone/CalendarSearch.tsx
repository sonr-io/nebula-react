
import CalendarSearch from "../../../assets/duotone/CalendarSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CalendarSearch data-testid="CalendarSearchIcon" className={classes} />
  );
}
