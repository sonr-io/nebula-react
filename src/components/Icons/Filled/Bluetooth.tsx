
import Bluetooth from "../../../assets/filled/Bluetooth.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BluetoothIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Bluetooth} data-testid="BluetoothIcon" className={classes} />
  );
}
