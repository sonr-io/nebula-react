
import DeviceMessage from "../../../assets/outline/DeviceMessage.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DeviceMessageIcon({ className, dataTestid = "DeviceMessageIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DeviceMessage data-testid={dataTestid} className={classes} {...rest} />
  );
}
