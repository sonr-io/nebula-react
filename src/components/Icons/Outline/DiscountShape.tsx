
import DiscountShape from "../../../assets/outline/DiscountShape.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiscountShapeIcon({ className, dataTestid = "DiscountShapeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DiscountShape data-testid={dataTestid} className={classes} {...rest} />
  );
}
