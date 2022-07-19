
import BinanceCoin from "../../../assets/filled/BinanceCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BinanceCoinIcon({ className, dataTestid = "BinanceCoinIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BinanceCoin data-testid={dataTestid} className={classes} {...rest} />
  );
}
