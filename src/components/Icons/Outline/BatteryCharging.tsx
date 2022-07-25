
import BatteryCharging from "../../../assets/outline/BatteryCharging.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BatteryChargingIcon({ className, dataTestid = "BatteryChargingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BatteryCharging data-testid={dataTestid} className={classes} {...rest} />
  );
}
