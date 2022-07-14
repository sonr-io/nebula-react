
import GasStation from "../../../assets/duotone/GasStation.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GasStationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GasStation data-testid="GasStationIcon" className={classes} />
  );
}
