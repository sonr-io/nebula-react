
import ArrangeCircle from "../../../assets/outline/ArrangeCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrangeCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrangeCircle data-testid="ArrangeCircleIcon" className={classes} />
  );
}
