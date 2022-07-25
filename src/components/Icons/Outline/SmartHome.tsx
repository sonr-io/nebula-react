
import SmartHome from "../../../assets/outline/SmartHome.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmartHomeIcon({ className, dataTestid = "SmartHomeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SmartHome data-testid={dataTestid} className={classes} {...rest} />
  );
}
