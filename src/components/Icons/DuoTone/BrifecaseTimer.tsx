
import BrifecaseTimer from "../../../assets/duotone/BrifecaseTimer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BrifecaseTimerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BrifecaseTimer data-testid="BrifecaseTimerIcon" className={classes} />
  );
}
