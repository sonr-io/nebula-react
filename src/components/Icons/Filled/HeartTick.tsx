
import HeartTick from "../../../assets/filled/HeartTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HeartTick data-testid="HeartTickIcon" className={classes} />
  );
}
