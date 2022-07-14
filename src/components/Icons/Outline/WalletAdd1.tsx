
import WalletAdd1 from "../../../assets/outline/WalletAdd1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletAdd1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={WalletAdd1} data-testid="WalletAdd1Icon" className={classes} />
  );
}
