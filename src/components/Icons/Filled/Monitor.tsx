
import Monitor from "../../../assets/filled/Monitor.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MonitorIcon({ className, dataTestid = "MonitorIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Monitor data-testid={dataTestid} className={classes} {...rest} />
  );
}
