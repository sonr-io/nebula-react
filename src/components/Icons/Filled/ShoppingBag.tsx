
import ShoppingBag from "../../../assets/filled/ShoppingBag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShoppingBagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ShoppingBag} data-testid="ShoppingBagIcon" className={classes} />
  );
}
