
import QuoteUp from "../../../assets/duotone/QuoteUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteUpIcon({ className, dataTestid = "QuoteUpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <QuoteUp data-testid={dataTestid} className={classes} {...rest} />
  );
}
