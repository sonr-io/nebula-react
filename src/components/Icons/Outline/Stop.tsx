
import Stop from "../../../assets/outline/Stop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StopIcon({ className, dataTestid = "StopIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Stop data-testid={dataTestid} className={classes} {...rest} />
  );
}
