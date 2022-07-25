
import Calendar1 from "../../../assets/outline/Calendar1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Calendar1Icon({ className, dataTestid = "Calendar1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Calendar1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
