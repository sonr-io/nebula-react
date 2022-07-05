
import Bluetooth2 from "../../../assets/filled/Bluetooth2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Bluetooth2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bluetooth2 data-testid="Bluetooth2Icon" className={classes} />
  );
}
