
import WalletMinus from "../../../assets/duotone/WalletMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <WalletMinus data-testid="WalletMinusIcon" className={classes} />
  );
}
