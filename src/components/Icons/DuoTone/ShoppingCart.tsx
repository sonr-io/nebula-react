
import ShoppingCart from "../../../assets/duotone/ShoppingCart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShoppingCartIcon({ className, dataTestid = "ShoppingCartIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ShoppingCart data-testid={dataTestid} className={classes} {...rest} />
  );
}
