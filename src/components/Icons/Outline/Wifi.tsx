
import Wifi from "../../../assets/outline/Wifi.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WifiIcon({ className, dataTestid = "WifiIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Wifi data-testid={dataTestid} className={classes} {...rest} />
  );
}
