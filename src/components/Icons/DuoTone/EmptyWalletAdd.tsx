
import EmptyWalletAdd from "../../../assets/duotone/EmptyWalletAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmptyWalletAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EmptyWalletAdd data-testid="EmptyWalletAddIcon" className={classes} />
  );
}
