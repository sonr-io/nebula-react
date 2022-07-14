
import BitcoinRefresh from "../../../assets/outline/BitcoinRefresh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BitcoinRefreshIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BitcoinRefresh data-testid="BitcoinRefreshIcon" className={classes} />
  );
}
