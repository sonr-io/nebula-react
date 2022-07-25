
import ArrowRight3 from "../../../assets/outline/ArrowRight3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowRight3Icon({ className, dataTestid = "ArrowRight3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowRight3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
