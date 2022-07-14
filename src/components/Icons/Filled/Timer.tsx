
import Timer from "../../../assets/filled/Timer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TimerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Timer} data-testid="TimerIcon" className={classes} />
  );
}
