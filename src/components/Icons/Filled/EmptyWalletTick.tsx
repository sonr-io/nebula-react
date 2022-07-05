
import EmptyWalletTick from "../../../assets/filled/EmptyWalletTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EmptyWalletTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EmptyWalletTick data-testid="EmptyWalletTickIcon" className={classes} />
  );
}
