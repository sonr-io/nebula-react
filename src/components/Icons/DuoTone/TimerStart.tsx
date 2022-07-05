
import TimerStart from "../../../assets/duotone/TimerStart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TimerStartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TimerStart data-testid="TimerStartIcon" className={classes} />
  );
}
