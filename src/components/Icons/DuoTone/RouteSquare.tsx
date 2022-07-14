
import RouteSquare from "../../../assets/duotone/RouteSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RouteSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RouteSquare} data-testid="RouteSquareIcon" className={classes} />
  );
}
