
import Bezier from "../../../assets/duotone/Bezier.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BezierIcon({ className, dataTestid = "BezierIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bezier data-testid={dataTestid} className={classes} {...rest} />
  );
}
