
import Clock from "../../../assets/duotone/Clock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClockIcon({ className, dataTestid = "ClockIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Clock data-testid={dataTestid} className={classes} {...rest} />
  );
}
