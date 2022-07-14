
import QuoteUp from "../../../assets/outline/QuoteUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <QuoteUp data-testid="QuoteUpIcon" className={classes} />
  );
}
