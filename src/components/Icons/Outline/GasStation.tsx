
import GasStation from "../../../assets/outline/GasStation.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GasStationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GasStation data-testid="GasStationIcon" className={classes} />
  );
}
