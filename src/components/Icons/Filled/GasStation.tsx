
import GasStation from "../../../assets/filled/GasStation.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GasStationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GasStation} data-testid="GasStationIcon" className={classes} />
  );
}
