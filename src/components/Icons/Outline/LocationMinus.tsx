
import LocationMinus from "../../../assets/outline/LocationMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LocationMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LocationMinus data-testid="LocationMinusIcon" className={classes} />
  );
}
