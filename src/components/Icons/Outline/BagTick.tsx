
import BagTick from "../../../assets/outline/BagTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagTickIcon({ className, dataTestid = "BagTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BagTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
