
import Triangle from "../../../assets/outline/Triangle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TriangleIcon({ className, dataTestid = "TriangleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Triangle data-testid={dataTestid} className={classes} {...rest} />
  );
}
