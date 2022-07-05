
import BluetoothCircle from "../../../assets/outline/BluetoothCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BluetoothCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BluetoothCircle data-testid="BluetoothCircleIcon" className={classes} />
  );
}
