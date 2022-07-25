
import Polygon from "../../../assets/outline/Polygon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PolygonIcon({ className, dataTestid = "PolygonIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Polygon data-testid={dataTestid} className={classes} {...rest} />
  );
}
