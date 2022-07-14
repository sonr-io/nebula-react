
import QuoteUpCircle from "../../../assets/duotone/QuoteUpCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteUpCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <QuoteUpCircle data-testid="QuoteUpCircleIcon" className={classes} />
  );
}
