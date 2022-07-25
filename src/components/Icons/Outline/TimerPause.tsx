
import TimerPause from "../../../assets/outline/TimerPause.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TimerPauseIcon({ className, dataTestid = "TimerPauseIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TimerPause data-testid={dataTestid} className={classes} {...rest} />
  );
}
