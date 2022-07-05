
import BagTimer from "../../../assets/filled/BagTimer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BagTimerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BagTimer data-testid="BagTimerIcon" className={classes} />
  );
}
