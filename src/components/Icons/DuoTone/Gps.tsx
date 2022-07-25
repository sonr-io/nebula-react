
import Gps from "../../../assets/duotone/Gps.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GpsIcon({ className, dataTestid = "GpsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Gps data-testid={dataTestid} className={classes} {...rest} />
  );
}
