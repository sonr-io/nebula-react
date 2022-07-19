
import ArrowRight1 from "../../../assets/outline/ArrowRight1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowRight1Icon({ className, dataTestid = "ArrowRight1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowRight1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
