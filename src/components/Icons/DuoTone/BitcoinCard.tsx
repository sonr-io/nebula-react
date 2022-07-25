
import BitcoinCard from "../../../assets/duotone/BitcoinCard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BitcoinCardIcon({ className, dataTestid = "BitcoinCardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BitcoinCard data-testid={dataTestid} className={classes} {...rest} />
  );
}
