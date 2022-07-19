
import EmptyWallet from "../../../assets/filled/EmptyWallet.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmptyWalletIcon({ className, dataTestid = "EmptyWalletIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EmptyWallet data-testid={dataTestid} className={classes} {...rest} />
  );
}
