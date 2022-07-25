
import TimerStart from "../../../assets/outline/TimerStart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TimerStartIcon({ className, dataTestid = "TimerStartIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TimerStart data-testid={dataTestid} className={classes} {...rest} />
  );
}
