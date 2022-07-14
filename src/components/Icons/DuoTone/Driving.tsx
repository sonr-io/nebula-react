
import Driving from "../../../assets/duotone/Driving.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DrivingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Driving} data-testid="DrivingIcon" className={classes} />
  );
}
