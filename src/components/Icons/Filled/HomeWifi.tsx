
import HomeWifi from "../../../assets/filled/HomeWifi.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeWifiIcon({ className, dataTestid = "HomeWifiIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HomeWifi data-testid={dataTestid} className={classes} {...rest} />
  );
}
