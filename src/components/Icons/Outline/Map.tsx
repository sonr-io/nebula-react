
import Map from "../../../assets/outline/Map.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MapIcon({ className, dataTestid = "MapIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Map data-testid={dataTestid} className={classes} {...rest} />
  );
}
