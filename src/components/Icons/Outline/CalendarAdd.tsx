
import CalendarAdd from "../../../assets/outline/CalendarAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarAddIcon({ className, dataTestid = "CalendarAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CalendarAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
