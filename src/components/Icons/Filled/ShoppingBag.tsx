
import ShoppingBag from "../../../assets/filled/ShoppingBag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShoppingBagIcon({ className, dataTestid = "ShoppingBagIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ShoppingBag data-testid={dataTestid} className={classes} {...rest} />
  );
}
