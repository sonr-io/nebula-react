
import TruckTick from "../../../assets/filled/TruckTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TruckTickIcon({ className, dataTestid = "TruckTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TruckTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
