
import House from "../../../assets/outline/House.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HouseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <House data-testid="HouseIcon" className={classes} />
  );
}
