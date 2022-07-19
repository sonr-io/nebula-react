
import Timer from "../../../assets/filled/Timer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TimerIcon({ className, dataTestid = "TimerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Timer data-testid={dataTestid} className={classes} {...rest} />
  );
}
