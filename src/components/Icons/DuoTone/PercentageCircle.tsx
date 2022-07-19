
import PercentageCircle from "../../../assets/duotone/PercentageCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PercentageCircleIcon({ className, dataTestid = "PercentageCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PercentageCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
