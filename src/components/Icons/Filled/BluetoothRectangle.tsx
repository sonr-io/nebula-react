
import BluetoothRectangle from "../../../assets/filled/BluetoothRectangle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BluetoothRectangleIcon({ className, dataTestid = "BluetoothRectangleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BluetoothRectangle data-testid={dataTestid} className={classes} {...rest} />
  );
}
