
import Radar from "../../../assets/duotone/Radar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RadarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Radar data-testid="RadarIcon" className={classes} />
  );
}
