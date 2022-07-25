
import GasStation from "../../../assets/duotone/GasStation.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GasStationIcon({ className, dataTestid = "GasStationIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GasStation data-testid={dataTestid} className={classes} {...rest} />
  );
}
