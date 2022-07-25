
import Refresh from "../../../assets/outline/Refresh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RefreshIcon({ className, dataTestid = "RefreshIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Refresh data-testid={dataTestid} className={classes} {...rest} />
  );
}
