
import Polygon from "../../../assets/filled/Polygon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PolygonIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Polygon} data-testid="PolygonIcon" className={classes} />
  );
}
