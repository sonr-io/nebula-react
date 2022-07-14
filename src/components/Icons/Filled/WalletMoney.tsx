
import WalletMoney from "../../../assets/filled/WalletMoney.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletMoneyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={WalletMoney} data-testid="WalletMoneyIcon" className={classes} />
  );
}
