
import QuoteUpSquare from "../../../assets/duotone/QuoteUpSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function QuoteUpSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <QuoteUpSquare data-testid="QuoteUpSquareIcon" className={classes} />
  );
}
