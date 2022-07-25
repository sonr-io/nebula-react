
import Speedometer from "../../../assets/duotone/Speedometer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SpeedometerIcon({ className, dataTestid = "SpeedometerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Speedometer data-testid={dataTestid} className={classes} {...rest} />
  );
}
