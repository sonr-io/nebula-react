
import Bluetooth from "../../../assets/duotone/Bluetooth.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BluetoothIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bluetooth data-testid="BluetoothIcon" className={classes} />
  );
}
