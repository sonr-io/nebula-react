
import Math from "../../../assets/outline/Math.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MathIcon({ className, dataTestid = "MathIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Math data-testid={dataTestid} className={classes} {...rest} />
  );
}
