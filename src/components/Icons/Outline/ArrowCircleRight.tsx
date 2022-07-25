
import ArrowCircleRight from "../../../assets/outline/ArrowCircleRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowCircleRightIcon({ className, dataTestid = "ArrowCircleRightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowCircleRight data-testid={dataTestid} className={classes} {...rest} />
  );
}
