
import EmptyWalletAdd from "../../../assets/outline/EmptyWalletAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmptyWalletAddIcon({ className, dataTestid = "EmptyWalletAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EmptyWalletAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
