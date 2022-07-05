
import Wallet from "../../../assets/duotone/Wallet.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function WalletIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Wallet data-testid="WalletIcon" className={classes} />
  );
}
