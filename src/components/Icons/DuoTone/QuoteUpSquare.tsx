
import QuoteUpSquare from "../../../assets/duotone/QuoteUpSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteUpSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={QuoteUpSquare} data-testid="QuoteUpSquareIcon" className={classes} />
  );
}
