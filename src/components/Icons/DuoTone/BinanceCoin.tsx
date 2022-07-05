
import BinanceCoin from "../../../assets/duotone/BinanceCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BinanceCoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BinanceCoin data-testid="BinanceCoinIcon" className={classes} />
  );
}
