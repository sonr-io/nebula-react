
import Coin from "../../../assets/outline/Coin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Coin} data-testid="CoinIcon" className={classes} />
  );
}
