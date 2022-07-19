
import DollarCircle from "../../../assets/outline/DollarCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DollarCircleIcon({ className, dataTestid = "DollarCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DollarCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
