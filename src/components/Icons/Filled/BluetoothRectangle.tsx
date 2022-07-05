
import BluetoothRectangle from "../../../assets/filled/BluetoothRectangle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BluetoothRectangleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BluetoothRectangle data-testid="BluetoothRectangleIcon" className={classes} />
  );
}
