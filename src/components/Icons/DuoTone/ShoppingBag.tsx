
import ShoppingBag from "../../../assets/duotone/ShoppingBag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShoppingBagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShoppingBag data-testid="ShoppingBagIcon" className={classes} />
  );
}
