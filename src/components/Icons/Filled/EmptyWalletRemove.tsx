
import EmptyWalletRemove from "../../../assets/filled/EmptyWalletRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmptyWalletRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EmptyWalletRemove data-testid="EmptyWalletRemoveIcon" className={classes} />
  );
}
