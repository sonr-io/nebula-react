
import QuoteDown from "../../../assets/outline/QuoteDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteDownIcon({ className, dataTestid = "QuoteDownIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <QuoteDown data-testid={dataTestid} className={classes} {...rest} />
  );
}
