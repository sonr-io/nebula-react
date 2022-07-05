
import Devices from "../../../assets/outline/Devices.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DevicesIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Devices data-testid="DevicesIcon" className={classes} />
  );
}
