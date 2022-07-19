
import RouteSquare from "../../../assets/duotone/RouteSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RouteSquareIcon({ className, dataTestid = "RouteSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RouteSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
