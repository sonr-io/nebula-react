
import MouseCircle from "../../../assets/filled/MouseCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MouseCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MouseCircle data-testid="MouseCircleIcon" className={classes} />
  );
}
