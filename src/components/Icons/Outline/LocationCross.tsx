
import LocationCross from "../../../assets/outline/LocationCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationCrossIcon({ className, dataTestid = "LocationCrossIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LocationCross data-testid={dataTestid} className={classes} {...rest} />
  );
}
