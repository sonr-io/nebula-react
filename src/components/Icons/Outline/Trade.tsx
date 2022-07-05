
import Trade from "../../../assets/outline/Trade.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TradeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Trade data-testid="TradeIcon" className={classes} />
  );
}
