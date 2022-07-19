
import BuyCrypto from "../../../assets/filled/BuyCrypto.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BuyCryptoIcon({ className, dataTestid = "BuyCryptoIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BuyCrypto data-testid={dataTestid} className={classes} {...rest} />
  );
}
