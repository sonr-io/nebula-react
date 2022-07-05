
import EmptyWalletChange from "../../../assets/outline/EmptyWalletChange.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EmptyWalletChangeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EmptyWalletChange data-testid="EmptyWalletChangeIcon" className={classes} />
  );
}
