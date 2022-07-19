
import EmptyWalletTick from "../../../assets/duotone/EmptyWalletTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmptyWalletTickIcon({ className, dataTestid = "EmptyWalletTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EmptyWalletTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
