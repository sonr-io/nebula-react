
import DiscountCircle from "../../../assets/duotone/DiscountCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DiscountCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DiscountCircle data-testid="DiscountCircleIcon" className={classes} />
  );
}
