
import WalletRemove from "../../../assets/outline/WalletRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={WalletRemove} data-testid="WalletRemoveIcon" className={classes} />
  );
}
