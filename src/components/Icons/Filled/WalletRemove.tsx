
import WalletRemove from "../../../assets/filled/WalletRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function WalletRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <WalletRemove data-testid="WalletRemoveIcon" className={classes} />
  );
}
