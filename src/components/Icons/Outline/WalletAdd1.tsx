
import WalletAdd1 from "../../../assets/outline/WalletAdd1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletAdd1Icon({ className, dataTestid = "WalletAdd1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <WalletAdd1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
