
import LocationSlash from "../../../assets/duotone/LocationSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LocationSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LocationSlash data-testid="LocationSlashIcon" className={classes} />
  );
}
