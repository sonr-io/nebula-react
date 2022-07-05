
import Wifi from "../../../assets/outline/Wifi.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function WifiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Wifi data-testid="WifiIcon" className={classes} />
  );
}
