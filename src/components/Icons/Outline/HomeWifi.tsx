
import HomeWifi from "../../../assets/outline/HomeWifi.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HomeWifiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HomeWifi data-testid="HomeWifiIcon" className={classes} />
  );
}
