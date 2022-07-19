
import ShieldCross from "../../../assets/outline/ShieldCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldCrossIcon({ className, dataTestid = "ShieldCrossIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ShieldCross data-testid={dataTestid} className={classes} {...rest} />
  );
}
