
import BrifecaseTimer from "../../../assets/outline/BrifecaseTimer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BrifecaseTimerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BrifecaseTimer} data-testid="BrifecaseTimerIcon" className={classes} />
  );
}
