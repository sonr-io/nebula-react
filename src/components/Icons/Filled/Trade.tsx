
import Trade from "../../../assets/filled/Trade.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TradeIcon({ className, dataTestid = "TradeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Trade data-testid={dataTestid} className={classes} {...rest} />
  );
}
