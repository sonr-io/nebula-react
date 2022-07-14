
import HeartTick from "../../../assets/duotone/HeartTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={HeartTick} data-testid="HeartTickIcon" className={classes} />
  );
}
