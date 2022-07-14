
import DiscountShape from "../../../assets/duotone/DiscountShape.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiscountShapeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DiscountShape data-testid="DiscountShapeIcon" className={classes} />
  );
}
