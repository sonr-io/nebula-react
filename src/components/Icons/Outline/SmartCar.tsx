
import SmartCar from "../../../assets/outline/SmartCar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmartCarIcon({ className, dataTestid = "SmartCarIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SmartCar data-testid={dataTestid} className={classes} {...rest} />
  );
}
