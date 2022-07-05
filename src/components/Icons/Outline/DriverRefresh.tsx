
import DriverRefresh from "../../../assets/outline/DriverRefresh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DriverRefreshIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DriverRefresh data-testid="DriverRefreshIcon" className={classes} />
  );
}
