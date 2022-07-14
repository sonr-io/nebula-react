
import TimerStart from "../../../assets/duotone/TimerStart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TimerStartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TimerStart} data-testid="TimerStartIcon" className={classes} />
  );
}
