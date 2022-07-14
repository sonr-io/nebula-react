
import Shop from "../../../assets/outline/Shop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShopIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Shop} data-testid="ShopIcon" className={classes} />
  );
}
