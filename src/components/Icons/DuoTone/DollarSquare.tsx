
import DollarSquare from "../../../assets/duotone/DollarSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DollarSquareIcon({ className, dataTestid = "DollarSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DollarSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
