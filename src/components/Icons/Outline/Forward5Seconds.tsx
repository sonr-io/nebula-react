
import Forward5Seconds from "../../../assets/outline/Forward5Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Forward5SecondsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Forward5Seconds data-testid="Forward5SecondsIcon" className={classes} />
  );
}
