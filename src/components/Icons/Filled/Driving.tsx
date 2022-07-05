
import Driving from "../../../assets/filled/Driving.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DrivingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Driving data-testid="DrivingIcon" className={classes} />
  );
}
