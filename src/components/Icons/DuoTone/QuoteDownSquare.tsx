
import QuoteDownSquare from "../../../assets/duotone/QuoteDownSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteDownSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={QuoteDownSquare} data-testid="QuoteDownSquareIcon" className={classes} />
  );
}
