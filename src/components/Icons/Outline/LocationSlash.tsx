
import LocationSlash from "../../../assets/outline/LocationSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LocationSlash data-testid="LocationSlashIcon" className={classes} />
  );
}
