
import Shop from "../../../assets/duotone/Shop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShopIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Shop data-testid="ShopIcon" className={classes} />
  );
}
