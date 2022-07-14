
import BluetoothCircle from "../../../assets/duotone/BluetoothCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BluetoothCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BluetoothCircle} data-testid="BluetoothCircleIcon" className={classes} />
  );
}
