
import Polygon from "../../../assets/duotone/Polygon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PolygonIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Polygon data-testid="PolygonIcon" className={classes} />
  );
}
