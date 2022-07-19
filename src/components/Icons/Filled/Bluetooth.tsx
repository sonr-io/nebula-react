
import Bluetooth from "../../../assets/filled/Bluetooth.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BluetoothIcon({ className, dataTestid = "BluetoothIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bluetooth data-testid={dataTestid} className={classes} {...rest} />
  );
}
