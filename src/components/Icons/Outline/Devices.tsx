
import Devices from "../../../assets/outline/Devices.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DevicesIcon({ className, dataTestid = "DevicesIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Devices data-testid={dataTestid} className={classes} {...rest} />
  );
}
