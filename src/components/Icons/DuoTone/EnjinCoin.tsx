
import EnjinCoin from "../../../assets/duotone/EnjinCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EnjinCoinIcon({ className, dataTestid = "EnjinCoinIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EnjinCoin data-testid={dataTestid} className={classes} {...rest} />
  );
}
