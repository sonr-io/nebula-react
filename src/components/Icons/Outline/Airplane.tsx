
import Airplane from "../../../assets/outline/Airplane.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AirplaneIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Airplane data-testid="AirplaneIcon" className={classes} />
  );
}
