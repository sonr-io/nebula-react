
import UsdCoin from "../../../assets/filled/UsdCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function UsdCoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UsdCoin data-testid="UsdCoinIcon" className={classes} />
  );
}
