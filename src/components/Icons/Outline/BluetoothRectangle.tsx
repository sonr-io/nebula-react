
import BluetoothRectangle from "../../../assets/outline/BluetoothRectangle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BluetoothRectangleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BluetoothRectangle} data-testid="BluetoothRectangleIcon" className={classes} />
  );
}
