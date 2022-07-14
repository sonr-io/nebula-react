
import TimerPause from "../../../assets/outline/TimerPause.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TimerPauseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TimerPause} data-testid="TimerPauseIcon" className={classes} />
  );
}
