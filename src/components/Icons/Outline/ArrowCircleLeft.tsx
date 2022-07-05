
import ArrowCircleLeft from "../../../assets/outline/ArrowCircleLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowCircleLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowCircleLeft data-testid="ArrowCircleLeftIcon" className={classes} />
  );
}
