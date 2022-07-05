
import EmptyWallet from "../../../assets/outline/EmptyWallet.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EmptyWalletIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EmptyWallet data-testid="EmptyWalletIcon" className={classes} />
  );
}
