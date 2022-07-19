
import CalendarRemove from "../../../assets/duotone/CalendarRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarRemoveIcon({ className, dataTestid = "CalendarRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CalendarRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
