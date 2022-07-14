
import DriverRefresh from "../../../assets/duotone/DriverRefresh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DriverRefreshIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DriverRefresh data-testid="DriverRefreshIcon" className={classes} />
  );
}
