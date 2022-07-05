
import EnjinCoin from "../../../assets/duotone/EnjinCoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EnjinCoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EnjinCoin data-testid="EnjinCoinIcon" className={classes} />
  );
}
