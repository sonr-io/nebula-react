
import DollarCircle from "../../../assets/duotone/DollarCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DollarCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DollarCircle data-testid="DollarCircleIcon" className={classes} />
  );
}
