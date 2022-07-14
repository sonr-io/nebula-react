
import HomeWifi from "../../../assets/duotone/HomeWifi.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeWifiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HomeWifi data-testid="HomeWifiIcon" className={classes} />
  );
}
