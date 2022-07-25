
import Clock1 from "../../../assets/outline/Clock1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Clock1Icon({ className, dataTestid = "Clock1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Clock1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
