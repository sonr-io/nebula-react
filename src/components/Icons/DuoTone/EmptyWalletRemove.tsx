
import EmptyWalletRemove from "../../../assets/duotone/EmptyWalletRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EmptyWalletRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EmptyWalletRemove data-testid="EmptyWalletRemoveIcon" className={classes} />
  );
}
