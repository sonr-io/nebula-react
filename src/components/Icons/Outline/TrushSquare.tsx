
import TrushSquare from "../../../assets/outline/TrushSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrushSquareIcon({ className, dataTestid = "TrushSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TrushSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
