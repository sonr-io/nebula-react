
import Location from "../../../assets/duotone/Location.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LocationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Location data-testid="LocationIcon" className={classes} />
  );
}
