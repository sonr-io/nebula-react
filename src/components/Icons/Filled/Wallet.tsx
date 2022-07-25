
import Wallet from "../../../assets/filled/Wallet.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletIcon({ className, dataTestid = "WalletIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Wallet data-testid={dataTestid} className={classes} {...rest} />
  );
}
