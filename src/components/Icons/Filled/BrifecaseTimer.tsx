
import BrifecaseTimer from "../../../assets/filled/BrifecaseTimer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BrifecaseTimerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BrifecaseTimer data-testid="BrifecaseTimerIcon" className={classes} />
  );
}