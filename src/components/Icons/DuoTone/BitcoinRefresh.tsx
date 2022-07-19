
import BitcoinRefresh from "../../../assets/duotone/BitcoinRefresh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BitcoinRefreshIcon({ className, dataTestid = "BitcoinRefreshIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BitcoinRefresh data-testid={dataTestid} className={classes} {...rest} />
  );
}
