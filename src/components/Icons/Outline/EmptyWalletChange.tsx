
import EmptyWalletChange from "../../../assets/outline/EmptyWalletChange.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmptyWalletChangeIcon({ className, dataTestid = "EmptyWalletChangeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EmptyWalletChange data-testid={dataTestid} className={classes} {...rest} />
  );
}
