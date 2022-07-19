
import DriverRefresh from "../../../assets/duotone/DriverRefresh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DriverRefreshIcon({ className, dataTestid = "DriverRefreshIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DriverRefresh data-testid={dataTestid} className={classes} {...rest} />
  );
}
