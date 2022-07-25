
import CalendarSearch from "../../../assets/outline/CalendarSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarSearchIcon({ className, dataTestid = "CalendarSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CalendarSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
