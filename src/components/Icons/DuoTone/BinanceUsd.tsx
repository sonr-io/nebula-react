
import BinanceUsd from "../../../assets/duotone/BinanceUsd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BinanceUsdIcon({ className, dataTestid = "BinanceUsdIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BinanceUsd data-testid={dataTestid} className={classes} {...rest} />
  );
}
