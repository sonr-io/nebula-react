
import DeviceMessage from "../../../assets/duotone/DeviceMessage.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DeviceMessageIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DeviceMessage} data-testid="DeviceMessageIcon" className={classes} />
  );
}
