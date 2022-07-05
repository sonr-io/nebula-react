
import Backward from "../../../assets/outline/Backward.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BackwardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Backward data-testid="BackwardIcon" className={classes} />
  );
}
