
import BatteryEmpty from "../../../assets/outline/BatteryEmpty.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BatteryEmptyIcon({ className, dataTestid = "BatteryEmptyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BatteryEmpty data-testid={dataTestid} className={classes} {...rest} />
  );
}
