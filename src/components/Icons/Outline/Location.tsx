
import Location from "../../../assets/outline/Location.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Location data-testid="LocationIcon" className={classes} />
  );
}
