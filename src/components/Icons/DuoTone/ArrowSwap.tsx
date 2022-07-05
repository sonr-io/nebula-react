
import ArrowSwap from "../../../assets/duotone/ArrowSwap.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowSwapIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowSwap data-testid="ArrowSwapIcon" className={classes} />
  );
}
