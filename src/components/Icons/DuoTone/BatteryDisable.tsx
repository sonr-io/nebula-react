
import BatteryDisable from "../../../assets/duotone/BatteryDisable.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BatteryDisableIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BatteryDisable data-testid="BatteryDisableIcon" className={classes} />
  );
}
