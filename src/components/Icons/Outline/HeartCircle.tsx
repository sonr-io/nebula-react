
import HeartCircle from "../../../assets/outline/HeartCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={HeartCircle} data-testid="HeartCircleIcon" className={classes} />
  );
}
