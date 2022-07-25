
import MonitorMobile from "../../../assets/duotone/MonitorMobile.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MonitorMobileIcon({ className, dataTestid = "MonitorMobileIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MonitorMobile data-testid={dataTestid} className={classes} {...rest} />
  );
}
