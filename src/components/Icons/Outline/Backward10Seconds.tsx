
import Backward10Seconds from "../../../assets/outline/Backward10Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Backward10SecondsIcon({ className, dataTestid = "Backward10SecondsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Backward10Seconds data-testid={dataTestid} className={classes} {...rest} />
  );
}
