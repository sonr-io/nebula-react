
import Bag from "../../../assets/outline/Bag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bag data-testid="BagIcon" className={classes} />
  );
}
