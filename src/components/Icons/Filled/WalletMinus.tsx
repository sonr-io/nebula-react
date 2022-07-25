
import WalletMinus from "../../../assets/filled/WalletMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletMinusIcon({ className, dataTestid = "WalletMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <WalletMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
