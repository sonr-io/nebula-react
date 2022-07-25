
import BluetoothCircle from "../../../assets/outline/BluetoothCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BluetoothCircleIcon({ className, dataTestid = "BluetoothCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BluetoothCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
