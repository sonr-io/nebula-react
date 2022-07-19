
import Calendar from "../../../assets/duotone/Calendar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarIcon({ className, dataTestid = "CalendarIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Calendar data-testid={dataTestid} className={classes} {...rest} />
  );
}
