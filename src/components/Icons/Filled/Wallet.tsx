
import Wallet from "../../../assets/filled/Wallet.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Wallet} data-testid="WalletIcon" className={classes} />
  );
}
