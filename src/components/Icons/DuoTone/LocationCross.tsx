
import LocationCross from "../../../assets/duotone/LocationCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LocationCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LocationCross data-testid="LocationCrossIcon" className={classes} />
  );
}
