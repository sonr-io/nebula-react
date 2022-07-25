
import LocationMinus from "../../../assets/filled/LocationMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationMinusIcon({ className, dataTestid = "LocationMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LocationMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
