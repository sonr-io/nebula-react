
import ShopAdd from "../../../assets/outline/ShopAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShopAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShopAdd data-testid="ShopAddIcon" className={classes} />
  );
}
