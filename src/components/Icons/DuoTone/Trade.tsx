
import Trade from "../../../assets/duotone/Trade.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TradeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Trade data-testid="TradeIcon" className={classes} />
  );
}
