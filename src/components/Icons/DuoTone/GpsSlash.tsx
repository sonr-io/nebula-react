
import GpsSlash from "../../../assets/duotone/GpsSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GpsSlashIcon({ className, dataTestid = "GpsSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GpsSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
