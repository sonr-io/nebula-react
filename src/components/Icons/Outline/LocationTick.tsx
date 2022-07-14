
import LocationTick from "../../../assets/outline/LocationTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={LocationTick} data-testid="LocationTickIcon" className={classes} />
  );
}
