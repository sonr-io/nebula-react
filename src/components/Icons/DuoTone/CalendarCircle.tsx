
import CalendarCircle from "../../../assets/duotone/CalendarCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarCircleIcon({ className, dataTestid = "CalendarCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CalendarCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
