
import BinanceCoin from "../../../assets/filled/BinanceCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BinanceCoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BinanceCoin data-testid="BinanceCoinIcon" className={classes} />
  );
}
