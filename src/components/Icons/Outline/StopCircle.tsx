
import StopCircle from "../../../assets/outline/StopCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StopCircleIcon({ className, dataTestid = "StopCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <StopCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
