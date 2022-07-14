
import UsdCoin from "../../../assets/filled/UsdCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UsdCoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={UsdCoin} data-testid="UsdCoinIcon" className={classes} />
  );
}
