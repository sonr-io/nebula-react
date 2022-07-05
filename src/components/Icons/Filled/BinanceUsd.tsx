
import BinanceUsd from "../../../assets/filled/BinanceUsd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BinanceUsdIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BinanceUsd data-testid="BinanceUsdIcon" className={classes} />
  );
}
