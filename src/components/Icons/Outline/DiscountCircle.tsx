
import DiscountCircle from "../../../assets/outline/DiscountCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiscountCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DiscountCircle data-testid="DiscountCircleIcon" className={classes} />
  );
}
