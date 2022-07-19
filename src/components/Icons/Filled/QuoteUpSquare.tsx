
import QuoteUpSquare from "../../../assets/filled/QuoteUpSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteUpSquareIcon({ className, dataTestid = "QuoteUpSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <QuoteUpSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
