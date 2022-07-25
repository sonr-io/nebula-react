
import CalendarEdit from "../../../assets/duotone/CalendarEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarEditIcon({ className, dataTestid = "CalendarEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CalendarEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
