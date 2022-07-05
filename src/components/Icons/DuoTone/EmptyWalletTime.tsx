
import EmptyWalletTime from "../../../assets/duotone/EmptyWalletTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EmptyWalletTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EmptyWalletTime data-testid="EmptyWalletTimeIcon" className={classes} />
  );
}
