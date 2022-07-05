
import ShopRemove from "../../../assets/outline/ShopRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShopRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShopRemove data-testid="ShopRemoveIcon" className={classes} />
  );
}
