
import QuoteDown from "../../../assets/filled/QuoteDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuoteDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <QuoteDown data-testid="QuoteDownIcon" className={classes} />
  );
}
