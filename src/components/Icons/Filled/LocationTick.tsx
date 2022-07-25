
import LocationTick from "../../../assets/filled/LocationTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationTickIcon({ className, dataTestid = "LocationTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LocationTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
