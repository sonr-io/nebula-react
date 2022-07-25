
import WalletMoney from "../../../assets/outline/WalletMoney.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletMoneyIcon({ className, dataTestid = "WalletMoneyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <WalletMoney data-testid={dataTestid} className={classes} {...rest} />
  );
}
