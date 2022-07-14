
import WalletRemove from "../../../assets/duotone/WalletRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <WalletRemove data-testid="WalletRemoveIcon" className={classes} />
  );
}