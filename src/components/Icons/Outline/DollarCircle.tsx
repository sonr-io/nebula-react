
import DollarCircle from "../../../assets/outline/DollarCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DollarCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DollarCircle} data-testid="DollarCircleIcon" className={classes} />
  );
}
