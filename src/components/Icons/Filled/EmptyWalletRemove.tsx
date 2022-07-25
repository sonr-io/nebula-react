
import EmptyWalletRemove from "../../../assets/filled/EmptyWalletRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmptyWalletRemoveIcon({ className, dataTestid = "EmptyWalletRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EmptyWalletRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
