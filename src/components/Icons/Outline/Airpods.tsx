
import Airpods from "../../../assets/outline/Airpods.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AirpodsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Airpods data-testid="AirpodsIcon" className={classes} />
  );
}
