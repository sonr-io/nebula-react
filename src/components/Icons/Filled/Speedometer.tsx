
import Speedometer from "../../../assets/filled/Speedometer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SpeedometerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Speedometer data-testid="SpeedometerIcon" className={classes} />
  );
}
