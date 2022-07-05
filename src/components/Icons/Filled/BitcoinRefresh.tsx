
import BitcoinRefresh from "../../../assets/filled/BitcoinRefresh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BitcoinRefreshIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BitcoinRefresh data-testid="BitcoinRefreshIcon" className={classes} />
  );
}
