
import Forward15Seconds from "../../../assets/duotone/Forward15Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Forward15SecondsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Forward15Seconds data-testid="Forward15SecondsIcon" className={classes} />
  );
}
