
import LocationSlash from "../../../assets/filled/LocationSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationSlashIcon({ className, dataTestid = "LocationSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LocationSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
