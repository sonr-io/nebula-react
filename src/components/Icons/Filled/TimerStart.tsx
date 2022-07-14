
import TimerStart from "../../../assets/filled/TimerStart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TimerStartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TimerStart data-testid="TimerStartIcon" className={classes} />
  );
}
