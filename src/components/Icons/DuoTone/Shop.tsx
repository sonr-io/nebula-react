
import Shop from "../../../assets/duotone/Shop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShopIcon({ className, dataTestid = "ShopIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Shop data-testid={dataTestid} className={classes} {...rest} />
  );
}
