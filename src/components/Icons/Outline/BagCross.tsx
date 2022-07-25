
import BagCross from "../../../assets/outline/BagCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagCrossIcon({ className, dataTestid = "BagCrossIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BagCross data-testid={dataTestid} className={classes} {...rest} />
  );
}
