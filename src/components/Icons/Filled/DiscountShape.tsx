
import DiscountShape from "../../../assets/filled/DiscountShape.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DiscountShapeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DiscountShape data-testid="DiscountShapeIcon" className={classes} />
  );
}
