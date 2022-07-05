
import Gps from "../../../assets/filled/Gps.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GpsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Gps data-testid="GpsIcon" className={classes} />
  );
}
