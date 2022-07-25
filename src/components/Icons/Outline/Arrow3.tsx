
import Arrow3 from "../../../assets/outline/Arrow3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Arrow3Icon({ className, dataTestid = "Arrow3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Arrow3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
