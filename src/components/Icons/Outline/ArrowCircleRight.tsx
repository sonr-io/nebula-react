
import ArrowCircleRight from "../../../assets/outline/ArrowCircleRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowCircleRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowCircleRight data-testid="ArrowCircleRightIcon" className={classes} />
  );
}
