
import UsdCoin from "../../../assets/outline/UsdCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UsdCoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UsdCoin data-testid="UsdCoinIcon" className={classes} />
  );
}
