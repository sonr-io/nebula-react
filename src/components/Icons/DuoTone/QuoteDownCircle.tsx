
import QuoteDownCircle from "../../../assets/duotone/QuoteDownCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteDownCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <QuoteDownCircle data-testid="QuoteDownCircleIcon" className={classes} />
  );
}
