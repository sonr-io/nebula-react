
import DeviceMessage from "../../../assets/outline/DeviceMessage.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DeviceMessageIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DeviceMessage data-testid="DeviceMessageIcon" className={classes} />
  );
}
