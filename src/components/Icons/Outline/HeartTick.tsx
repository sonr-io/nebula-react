
import HeartTick from "../../../assets/outline/HeartTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HeartTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HeartTick data-testid="HeartTickIcon" className={classes} />
  );
}
