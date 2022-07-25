
import QuoteDownCircle from "../../../assets/outline/QuoteDownCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteDownCircleIcon({ className, dataTestid = "QuoteDownCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <QuoteDownCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
