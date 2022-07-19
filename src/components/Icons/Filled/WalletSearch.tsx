
import WalletSearch from "../../../assets/filled/WalletSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletSearchIcon({ className, dataTestid = "WalletSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <WalletSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
