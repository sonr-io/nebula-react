
import HeartCircle from "../../../assets/duotone/HeartCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HeartCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HeartCircle data-testid="HeartCircleIcon" className={classes} />
  );
}
