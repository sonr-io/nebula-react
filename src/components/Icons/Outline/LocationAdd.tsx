
import LocationAdd from "../../../assets/outline/LocationAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationAddIcon({ className, dataTestid = "LocationAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LocationAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
