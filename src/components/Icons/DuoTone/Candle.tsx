
import Candle from "../../../assets/duotone/Candle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CandleIcon({ className, dataTestid = "CandleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Candle data-testid={dataTestid} className={classes} {...rest} />
  );
}
