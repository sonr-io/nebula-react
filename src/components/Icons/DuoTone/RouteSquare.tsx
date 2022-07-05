
import RouteSquare from "../../../assets/duotone/RouteSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RouteSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RouteSquare data-testid="RouteSquareIcon" className={classes} />
  );
}
