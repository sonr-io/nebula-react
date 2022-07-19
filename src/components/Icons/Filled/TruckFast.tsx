
import TruckFast from "../../../assets/filled/TruckFast.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TruckFastIcon({ className, dataTestid = "TruckFastIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TruckFast data-testid={dataTestid} className={classes} {...rest} />
  );
}
