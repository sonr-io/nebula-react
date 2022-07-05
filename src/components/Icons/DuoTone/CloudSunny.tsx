
import CloudSunny from "../../../assets/duotone/CloudSunny.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CloudSunnyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudSunny data-testid="CloudSunnyIcon" className={classes} />
  );
}
