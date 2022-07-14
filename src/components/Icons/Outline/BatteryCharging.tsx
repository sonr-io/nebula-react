
import BatteryCharging from "../../../assets/outline/BatteryCharging.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BatteryChargingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BatteryCharging} data-testid="BatteryChargingIcon" className={classes} />
  );
}
