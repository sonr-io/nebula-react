
import EmptyWalletAdd from "../../../assets/filled/EmptyWalletAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmptyWalletAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={EmptyWalletAdd} data-testid="EmptyWalletAddIcon" className={classes} />
  );
}
