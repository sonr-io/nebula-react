
import ShopRemove from "../../../assets/filled/ShopRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShopRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ShopRemove} data-testid="ShopRemoveIcon" className={classes} />
  );
}
