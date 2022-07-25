
import DiscountCircle from "../../../assets/outline/DiscountCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiscountCircleIcon({ className, dataTestid = "DiscountCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DiscountCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
