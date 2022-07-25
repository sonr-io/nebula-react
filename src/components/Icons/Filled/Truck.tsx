
import Truck from "../../../assets/filled/Truck.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TruckIcon({ className, dataTestid = "TruckIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Truck data-testid={dataTestid} className={classes} {...rest} />
  );
}
