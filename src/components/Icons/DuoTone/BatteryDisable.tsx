
import BatteryDisable from "../../../assets/duotone/BatteryDisable.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BatteryDisableIcon({ className, dataTestid = "BatteryDisableIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BatteryDisable data-testid={dataTestid} className={classes} {...rest} />
  );
}
