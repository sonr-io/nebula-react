
import QuoteDownCircle from "../../../assets/filled/QuoteDownCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function QuoteDownCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <QuoteDownCircle data-testid="QuoteDownCircleIcon" className={classes} />
  );
}
