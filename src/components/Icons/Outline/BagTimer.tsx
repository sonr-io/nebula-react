
import BagTimer from "../../../assets/outline/BagTimer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagTimerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BagTimer} data-testid="BagTimerIcon" className={classes} />
  );
}
