
import Coin from "../../../assets/duotone/Coin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Coin data-testid="CoinIcon" className={classes} />
  );
}
