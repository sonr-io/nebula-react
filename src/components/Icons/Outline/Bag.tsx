
import Bag from "../../../assets/outline/Bag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagIcon({ className, dataTestid = "BagIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bag data-testid={dataTestid} className={classes} {...rest} />
  );
}
