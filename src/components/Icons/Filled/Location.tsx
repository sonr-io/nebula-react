
import Location from "../../../assets/filled/Location.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationIcon({ className, dataTestid = "LocationIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Location data-testid={dataTestid} className={classes} {...rest} />
  );
}
