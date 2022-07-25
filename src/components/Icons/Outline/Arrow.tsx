
import Arrow from "../../../assets/outline/Arrow.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowIcon({ className, dataTestid = "ArrowIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Arrow data-testid={dataTestid} className={classes} {...rest} />
  );
}
