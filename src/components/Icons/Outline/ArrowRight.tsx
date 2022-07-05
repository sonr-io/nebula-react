
import ArrowRight from "../../../assets/outline/ArrowRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowRight data-testid="ArrowRightIcon" className={classes} />
  );
}
