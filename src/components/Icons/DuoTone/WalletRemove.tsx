
import WalletRemove from "../../../assets/duotone/WalletRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletRemoveIcon({ className, dataTestid = "WalletRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <WalletRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
