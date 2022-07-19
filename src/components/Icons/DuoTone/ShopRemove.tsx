
import ShopRemove from "../../../assets/duotone/ShopRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShopRemoveIcon({ className, dataTestid = "ShopRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ShopRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
