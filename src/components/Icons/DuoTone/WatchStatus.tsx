
import WatchStatus from "../../../assets/duotone/WatchStatus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WatchStatusIcon({ className, dataTestid = "WatchStatusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <WatchStatus data-testid={dataTestid} className={classes} {...rest} />
  );
}
