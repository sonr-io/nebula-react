
import EmptyWalletTime from "../../../assets/outline/EmptyWalletTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmptyWalletTimeIcon({ className, dataTestid = "EmptyWalletTimeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EmptyWalletTime data-testid={dataTestid} className={classes} {...rest} />
  );
}
