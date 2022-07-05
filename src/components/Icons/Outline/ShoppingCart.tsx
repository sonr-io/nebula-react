
import ShoppingCart from "../../../assets/outline/ShoppingCart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShoppingCartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShoppingCart data-testid="ShoppingCartIcon" className={classes} />
  );
}
