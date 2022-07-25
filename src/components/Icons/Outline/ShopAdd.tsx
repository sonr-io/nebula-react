
import ShopAdd from "../../../assets/outline/ShopAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShopAddIcon({ className, dataTestid = "ShopAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ShopAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
