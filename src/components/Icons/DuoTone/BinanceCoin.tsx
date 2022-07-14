
import BinanceCoin from "../../../assets/duotone/BinanceCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BinanceCoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BinanceCoin} data-testid="BinanceCoinIcon" className={classes} />
  );
}
