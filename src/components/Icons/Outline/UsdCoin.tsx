
import UsdCoin from "../../../assets/outline/UsdCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UsdCoinIcon({ className, dataTestid = "UsdCoinIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UsdCoin data-testid={dataTestid} className={classes} {...rest} />
  );
}
