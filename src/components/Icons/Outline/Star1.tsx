
import Star1 from "../../../assets/outline/Star1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Star1Icon({ className, dataTestid = "Star1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Star1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
