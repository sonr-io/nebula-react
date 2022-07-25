
import QuoteDownSquare from "../../../assets/outline/QuoteDownSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteDownSquareIcon({ className, dataTestid = "QuoteDownSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <QuoteDownSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
