
import Forward10Seconds from "../../../assets/outline/Forward10Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Forward10SecondsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Forward10Seconds data-testid="Forward10SecondsIcon" className={classes} />
  );
}
