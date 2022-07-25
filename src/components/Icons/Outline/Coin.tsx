
import Coin from "../../../assets/outline/Coin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CoinIcon({ className, dataTestid = "CoinIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Coin data-testid={dataTestid} className={classes} {...rest} />
  );
}
