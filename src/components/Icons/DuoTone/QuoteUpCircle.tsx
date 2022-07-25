
import QuoteUpCircle from "../../../assets/duotone/QuoteUpCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteUpCircleIcon({ className, dataTestid = "QuoteUpCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <QuoteUpCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
