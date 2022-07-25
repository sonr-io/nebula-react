
import TruckRemove from "../../../assets/outline/TruckRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TruckRemoveIcon({ className, dataTestid = "TruckRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TruckRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
