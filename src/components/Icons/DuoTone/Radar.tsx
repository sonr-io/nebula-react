
import Radar from "../../../assets/duotone/Radar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RadarIcon({ className, dataTestid = "RadarIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Radar data-testid={dataTestid} className={classes} {...rest} />
  );
}
