
import ArrowCircleLeft from "../../../assets/outline/ArrowCircleLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowCircleLeftIcon({ className, dataTestid = "ArrowCircleLeftIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowCircleLeft data-testid={dataTestid} className={classes} {...rest} />
  );
}
