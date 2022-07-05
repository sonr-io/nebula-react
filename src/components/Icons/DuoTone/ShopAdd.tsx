
import ShopAdd from "../../../assets/duotone/ShopAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShopAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShopAdd data-testid="ShopAddIcon" className={classes} />
  );
}
