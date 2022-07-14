
import Devices from "../../../assets/duotone/Devices.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DevicesIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Devices} data-testid="DevicesIcon" className={classes} />
  );
}
