
import ArrowCircleDown from "../../../assets/duotone/ArrowCircleDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowCircleDownIcon({ className, dataTestid = "ArrowCircleDownIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowCircleDown data-testid={dataTestid} className={classes} {...rest} />
  );
}
