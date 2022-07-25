
import CalendarTick from "../../../assets/outline/CalendarTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarTickIcon({ className, dataTestid = "CalendarTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CalendarTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
