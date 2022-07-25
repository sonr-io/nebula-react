
import WalletCheck from "../../../assets/filled/WalletCheck.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletCheckIcon({ className, dataTestid = "WalletCheckIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <WalletCheck data-testid={dataTestid} className={classes} {...rest} />
  );
}
