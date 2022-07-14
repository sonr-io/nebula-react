
import ShoppingCart from "../../../assets/outline/ShoppingCart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShoppingCartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ShoppingCart} data-testid="ShoppingCartIcon" className={classes} />
  );
}
